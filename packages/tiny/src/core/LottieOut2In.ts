import * as dotenv from 'dotenv'
import * as fileHelper from '@utils/fileHelper'
import { TinyLottieLog } from '@logger/category'
import path from 'path'

interface IOptions {
  /** 需要转化文件 */
  // input: Record<string, string>
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
 * 外置 转化 内置
 */
export class TinyLottieOut2In {
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
        TinyLottieLog.info(`文件名`, fileName)
        if (!fileName.startsWith('.')) {
          await this.writeFile({ name: fileName, dir: path.resolve(input, fileName) })
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
    const outputFile = path.resolve(outputDir, `${name}.json`)
    fileHelper.writeFile(outputFile, jsonString)
  }
  // 替换 lottie 文件中的图片数据为 base64
  async replaceLottie(fileInfo: IFileInfo): Promise<any> {
    const mapping = await this.getBase64(fileInfo)
    const data = await this.getLottieJson(fileInfo)
    if (!data) {
      return null
    }
    data.assets.forEach((item: any) => {
      if (item.u) {
        item.p = mapping[item.p]
        item.u = ''
      }
    })
    return data
  }
  // 获取 lottie 文件中图片文件的 base64 数据
  async getBase64(fileInfo: IFileInfo) {
    const { dir } = fileInfo
    const { images = 'images' } = this.options.config
    const imagesDir = path.resolve(dir, images)
    if (!fileHelper.isDirectory(imagesDir)) {
      TinyLottieLog.error(`Error: Images directory '${imagesDir}' does not exist.`)
      return {}
    }
    const list = fileHelper.getFileList(imagesDir)
    const result: Record<string, string> = {}
    await Promise.all(
      list.map(async (fileName) => {
        if (fileName.endsWith('.jpg') || fileName.endsWith('.png')) {
          const imgPath = path.resolve(imagesDir, fileName)
          const imageData = fileHelper.readFile(imgPath)
          const extname = fileName.split('.')[1]
          const getBase64Data = async () => {
            return imageData?.toString('base64')
          };
          result[fileName] = `data:image/${extname};base64,${await getBase64Data()}`
        } else {
          TinyLottieLog.error(`Error: Failed to read image file '${fileName}'.`)
        }
      })
    )
    return result
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