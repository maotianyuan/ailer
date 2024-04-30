import * as fileHelper from '@utils/fileHelper'
import { TinyLottieLog } from '@logger/category'
import path from 'path'

interface IOptions {
  input: Record<string, string>;
  output: {
    dir: string
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
    this.execute()
  }
  async execute(): Promise<void> {
    const { input } = this.options
    for (const [name, dir] of Object.entries(input)) {
      await this.writeFile({ name, dir });
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
    TinyLottieLog.log(`File '${outputFile}' written successfully.`);
  }
  // 替换 lottie 文件中的图片数据为 base64
  async replaceLottie(fileInfo: IFileInfo): Promise<any> {
    const mapping = await this.getBase64(fileInfo)
    const data = await this.getLottieJson(fileInfo)
    if (!data) {
      return null;
    }
    data.assets.forEach((item: any) => {
      if (item.u) {
        item.p = mapping[item.p]
        item.u = ''
      }
    })
    return data;
  }
  // 获取 lottie 文件中图片文件的 base64 数据
  async getBase64(fileInfo : IFileInfo) {
    const { dir } = fileInfo
    const imagesDir = path.resolve(dir, 'images')
    if (!fileHelper.isDirectory(imagesDir)) {
      TinyLottieLog.error(`Error: Images directory '${imagesDir}' does not exist.`);
      return {};
    }
    const list = fileHelper.getFileList(imagesDir);
    const result: Record<string, string> = {};
    list.forEach(fileName => {
      if (fileName.endsWith('.jpg') || fileName.endsWith('.png')) {
        const imgPath = path.resolve(imagesDir, fileName);
        const imageData = fileHelper.readFile(imgPath);
        const base64Data = imageData?.toString('base64');
        const extra = fileName.split('.')[1];
        result[fileName] = `data:image/${extra};base64,${base64Data}`;
      } else {
        TinyLottieLog.error(`Error: Failed to read image file '${fileName}'.`);
      }
    })
    return result;
  }
  // 获取 lottie 文件的 JSON 数据
  async getLottieJson(fileInfo : IFileInfo) {
    const { dir } = fileInfo
    const jsonFilePath = fileHelper.findFirstJsonFile(dir);
    if (!jsonFilePath) {
      return;
    }
    const data = fileHelper.readFile(jsonFilePath)
    if (!data) {
      TinyLottieLog.error(`Error: Failed to read lottie JSON file '${jsonFilePath}'.`);
      return null;
    }
    try {
      return JSON.parse(data.toString());
    } catch (error) {
      TinyLottieLog.error(`Error: Invalid JSON format in file '${jsonFilePath}'.`);
      return null;
    }
  }
}