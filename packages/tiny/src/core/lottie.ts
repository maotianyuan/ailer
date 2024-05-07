import * as dotenv from 'dotenv';
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

export class TinyLottie {
  public options: IOptions
  constructor(options: IOptions) {
    this.options = options
    dotenv.config({ path: '.env' });
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
  async getBase64(fileInfo : IFileInfo) {
    const { dir } = fileInfo
    const { images, tinypng } = this.options.config;
    const imagesDir = path.resolve(dir, images)
    if (!fileHelper.isDirectory(imagesDir)) {
      TinyLottieLog.error(`Error: Images directory '${imagesDir}' does not exist.`)
      return {}
    }
    const list = fileHelper.getFileList(imagesDir)
    const result: Record<string, string> = {}
    list.forEach(async fileName => {
      if (fileName.endsWith('.jpg') || fileName.endsWith('.png')) {
        const imgPath = path.resolve(imagesDir, fileName)
        const imageData = fileHelper.readFile(imgPath)
        const extname = fileName.split('.')[1]

        const getBase64Data = async () => {
          const { config } = this.options
          const { isTinyPng } = config
          const tinyPngKey = process.env.TINYPNG_API_KEY;
          if (!isTinyPng) {
            return imageData?.toString('base64');
          } else {
            if (imageData) {
              if (!tinyPngKey) {
                TinyLottieLog.error(`Error: TINYPNG_API_KEY 未设置， 无法压缩图片`)
                return imageData?.toString('base64');
              }
              tinify.key = tinyPngKey;
              const source = tinify.fromBuffer(imageData);
              const buff: any = await source.toBuffer();
              const base64 = buff.toString('base64');
              const outputFile = path.resolve(dir, tinypng, fileName)
              fileHelper.writeFile(outputFile, buff)
              return base64;
            }
          }
        }
        result[fileName] = `data:image/${extname}base64,${await getBase64Data()}`
      } else {
        TinyLottieLog.error(`Error: Failed to read image file '${fileName}'.`)
      }
    })
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