import * as dotenv from 'dotenv'
import * as fileHelper from '@utils/fileHelper'
import { TinyLottieLog } from '@logger/category'
import path from 'path'

interface IOptions {
  /** 需要压缩文件 */
  input: string;
  /** 压缩后文件 */
  output: {
    dir: string
  }
  /** 配置信息 */
  config: {
    /** 图片地址名 */
    images?: string
  }
}
interface IFileInfo {
  name: string
  dir: string
}

/**
 * 转化：内置 -> 外挂
 */
export class TinyLottieIn2Out {
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
        if (!fileName.startsWith('.')) {
          const name = fileName.replace('.json', '');
          await this.writeFile({ name, dir: path.resolve(input, fileName) })
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
    const { name } = fileInfo
    const data = await this.replaceLottie(fileInfo)
    if (!data) {
      TinyLottieLog.error(`Error: Failed to get lottie JSON for file '${name}'.`)
      return
    }
    const jsonString = JSON.stringify(data)
    const outputDir = this.options?.output?.dir || ''
    fileHelper.createDirectory(outputDir)
    const outputFile = path.resolve(outputDir, name, 'index.json')
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
    const { name } = fileInfo
    const outputDir = this.options?.output?.dir || ''
    const { images = 'images' } = this.options.config
    const promises = data.assets.map(async (item: any) => {
      if (item.p && item.p.includes('base64')) {
        const imagestring = item.p
        const base64str = imagestring.slice(imagestring.indexOf('base64,') + 7)
        const extname = imagestring.slice(imagestring.indexOf('data:image/') + 11, imagestring.indexOf(';base64'))
        const fileName = `${item.id}.${extname}`;
        const imageData: any = Buffer.from(base64str, 'base64')
        const outputFile = path.resolve(outputDir, name, images, fileName)
        fileHelper.writeFile(outputFile, imageData)
        item.u = `${images}/`
        item.p = fileName
        return
      }
    })

    await Promise.all(promises)

    return data
  }

  // 获取 lottie 文件的 JSON 数据
  async getLottieJson(fileInfo : IFileInfo) {
    const { dir } = fileInfo
    const data = fileHelper.readFile(dir)
    if (!data) {
      TinyLottieLog.error(`Error: Failed to read lottie JSON file '${dir}'.`)
      return null
    }
    try {
      return JSON.parse(data.toString())
    } catch (error) {
      TinyLottieLog.error(`Error: Invalid JSON format in file '${dir}'.`)
      return null
    }
  }
}