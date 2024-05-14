import * as dotenv from 'dotenv'
import * as fileHelper from '@utils/fileHelper'
import { TinyLottieLog } from '@logger/category'
import path from 'path'
import tinify from 'tinify'

interface IOptions {
  input: Record<string, string>
  output: {
    dir: string
  }
  config: {
    isTinyPng: boolean
    images: string
    tinypng: string
  }
}
interface IFileInfo {
  name: string
  dir: string
}

export class TinyLottieInner {
  public options: IOptions
  constructor(options: IOptions) {
    this.options = options
    dotenv.config({ path: '.env' })
    this.execute()
  }
  async execute(): Promise<void> {
    const { input } = this.options
    for (const [name, dir] of Object.entries(input)) {
      await this.writeFile({ name, dir })
    }
  }
  // 写入转换后的文件
  async writeFile(fileInfo: IFileInfo): Promise<void> {
    const { name } = fileInfo
    const data = await this.replaceLottie(fileInfo)
    if (!data) {
      TinyLottieLog.error(`Error: Failed to get lottie JSON for file '${name}'.`)
      return
    }
    const jsonString = JSON.stringify(data)
    const outputDir = this.options?.output?.dir || ''
    fileHelper.createDirectory(outputDir)
    const outputFile = path.resolve(outputDir, `${name}.json`)
    fileHelper.writeFile(outputFile, jsonString)
    TinyLottieLog.log(`File '${outputFile}' written successfully.`)
  }
  // 替换 lottie 文件中的图片数据为 base64
  async replaceLottie(fileInfo: IFileInfo): Promise<any> {
    const data = await this.getLottieJson(fileInfo)
    if (!data) {
      return null
    }
    return await this.getBase64(fileInfo, data)
  }
  // 压缩 base64
  async getBase64(fileInfo: IFileInfo, data: any) {
    const { dir } = fileInfo
    const { isTinyPng, images, tinypng } = this.options.config
    const tinyPngKey = process.env.TINYPNG_API_KEY
    const promises = data.assets.map(async (item: any) => {
      if (item.p && item.p.includes('base64')) {
        const imagestring = item.p
        const base64str = imagestring.slice(imagestring.indexOf('base64,') + 7)
        const extname = imagestring.slice(imagestring.indexOf('data:image/') + 11, imagestring.indexOf(';base64'))
        const fileName = `${item.id}.${extname}`;
        const imageData: any = Buffer.from(base64str, 'base64')
        if (!tinyPngKey || !isTinyPng) {
          TinyLottieLog.info(`没有 tinyPngKey 或 isTinyPng 开关关闭 不压缩图片, 把图片外挂出去 ${fileName}`) 
          const outputFile = path.resolve(dir, images, fileName)
          fileHelper.writeFile(outputFile, imageData)
          item.u = `${images}/`
          item.p = fileName
          return
        }
        tinify.key = tinyPngKey
        const source = tinify.fromBuffer(imageData)
        const buff: any = await source.toBuffer()
        const outputFile = path.resolve(dir, tinypng, fileName)
        fileHelper.writeFile(outputFile, buff)

        TinyLottieLog.info(`有 tinyPngKey 压缩图片`, fileName)
        item.p = 'data:image/' + extname + ';base64,' + buff.toString('base64')
      }
    })

    await Promise.all(promises)

    return data
  }

  // 获取 lottie 文件的 JSON 数据
  async getLottieJson(fileInfo : IFileInfo) {
    const { dir } = fileInfo
    const jsonFilePath = fileHelper.findFirstJsonFile(dir)
    if (!jsonFilePath) {
      return
    }
    const data = fileHelper.readFile(jsonFilePath)
    if (!data) {
      TinyLottieLog.error(`Error: Failed to read lottie JSON file '${jsonFilePath}'.`)
      return null
    }
    try {
      return JSON.parse(data.toString())
    } catch (error) {
      TinyLottieLog.error(`Error: Invalid JSON format in file '${jsonFilePath}'.`)
      return null
    }
  }
}