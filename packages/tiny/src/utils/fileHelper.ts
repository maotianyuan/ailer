import * as jetpack from 'fs-jetpack'
import { FileHelperLog } from '@logger/category'


// 获取目录下的文件列表
export const getFileList = (directoryPath: string): string[] => {
  if (!jetpack.exists(directoryPath)) {
    FileHelperLog.error(`目录 '${directoryPath}' 不存在`)
    return []
  }
  if (!isDirectory(directoryPath)) {
    FileHelperLog.error(`'${directoryPath}' 不是一个目录`)
    return []
  }
  return jetpack.list(directoryPath) || []
}

// 读取文件内容
export const readFile = (filePath: string): Buffer | null => {
  if (!jetpack.exists(filePath)) {
    FileHelperLog.error(`文件 '${filePath}' 不存在`)
    return null
  }
  if (!isFile(filePath)) {
    FileHelperLog.error(`'${filePath}' 不是一个文件`)
    return null
  }
  return jetpack.read(filePath, 'buffer') || null
}

// 创建文件夹
export const createDirectory = (directoryPath: string): void => {
  if (jetpack.exists(directoryPath)) {
    return
  }
  jetpack.dir(directoryPath)
  FileHelperLog.info(`目录 '${directoryPath}' 创建成功`)
}

// 写入文件
export const writeFile = (filePath: string, content: string): void => {
  jetpack.write(filePath, content)
  FileHelperLog.log(`文件 '${filePath}' 写入成功。`)
}

// 判断是否是目录
export const isDirectory = (directoryPath: string): boolean => {
  const status = jetpack.inspect(directoryPath)
  return status?.type === 'dir' || false
}

// 判断是否是文件
export const isFile = (filePath: string): boolean => {
  const status = jetpack.inspect(filePath)
  return status?.type === 'file' || false
}

// 获取目录下的第一个以 .json 结尾的文件的路径
export const findFirstJsonFile = (directoryPath: string): string | null => {
  const files = jetpack.find(directoryPath, { matching: '*.json' })
  if (files.length > 0) {
    return files[0]
  } else {
    FileHelperLog.warn(`目录 '${directoryPath}' 中没有找到以 .json 结尾的文件。`)
    return null
  }
}