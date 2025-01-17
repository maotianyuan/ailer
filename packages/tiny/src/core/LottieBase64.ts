import * as dotenv from 'dotenv'
import * as fileHelper from '@utils/fileHelper'
import { TinyLottieLog } from '@logger/category'
import path from 'path'
import tinify from 'tinify'

interface IOptions {
  /** 需要压缩文件 */
  input: string;
  /** 压缩后文件 */
  output: {
    dir: string
  }
  /** 配置信息 */
  config: {
    key?: string
  }
}
interface IFileInfo {
  name: string
  fileName: string
}

/**
 * 压缩 Lottie 中的 Base64
 */
export class TinyLottieBase64 {
  public options: IOptions
  constructor(options: IOptions) {
    this.options = options
    dotenv.config({ path: '.env' })
  }
  async execute(): Promise<boolean> {
    const { input } = this.options
    const list = fileHelper.getFileList(input)
    try {
      for (let i = 0; i < list.length; i++) {
        const fileName = list[i];
        if (fileName.endsWith('.json')) {
          await this.writeFile({ name: fileName, fileName: path.resolve(input, fileName) })
        }
      }
    } catch (error) {
      TinyLottieLog.error(`Error: Failed to get lottie JSON for file `, error)
      return false;
    }
    return true;
  }
  // 写入转换后的文件
  async writeFile(fileInfo: IFileInfo): Promise<void> {
    const { name, fileName } = fileInfo
    const data = await this.replaceLottie(fileName)
    if (!data) {
      TinyLottieLog.error(`Error: Failed to get lottie JSON for file '${name}'.`)
      return
    }
    const jsonString = JSON.stringify(data)
    const outputDir = this.options?.output?.dir || ''
    fileHelper.createDirectory(outputDir)
    const outputFile = path.resolve(outputDir, `${name}`)
    fileHelper.writeFile(outputFile, jsonString)
  }
  // 替换 lottie 文件中的图片数据为 base64
  async replaceLottie(path: string): Promise<any> {
    const data = await this.getLottieJson(path)
    if (!data) {
      return null
    }
    return await this.getBase64(data)
  }
  // 压缩 base64
  async getBase64(data: any) {
    const { key = '' } = this.options.config
    const tinyPngKey = process.env.TINYPNG_API_KEY || key;
    if (!tinyPngKey) {
      return null;
    }
    const promises = data.assets.map(async (item: any) => {
      if (item.p && item.p.includes('base64')) {
        const imagestring = item.p
        const base64str = imagestring.slice(imagestring.indexOf('base64,') + 7)
        const extname = imagestring.slice(imagestring.indexOf('data:image/') + 11, imagestring.indexOf(';base64'))
        const imageData: any = Buffer.from(base64str, 'base64')
        tinify.key = tinyPngKey
        const source = tinify.fromBuffer(imageData)
        const buff: any = await source.toBuffer()
        item.p = 'data:image/' + extname + ';base64,' + buff.toString('base64')
      }
    })

    await Promise.all(promises)

    return data
  }

  // 获取 lottie 文件的 JSON 数据
  async getLottieJson(fileName: string) {
    const data = fileHelper.readFile(fileName)
    if (!data) {
      TinyLottieLog.error(`Error: Failed to read lottie JSON file '${fileName}'.`)
      return null
    }
    try {
      return JSON.parse(data.toString())
    } catch (error) {
      TinyLottieLog.error(`Error: Invalid JSON format in file '${fileName}'.`)
      return null
    }
  }
}