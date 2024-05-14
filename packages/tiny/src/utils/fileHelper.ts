import * as jetpack from 'fs-jetpack'
import { FileHelperLog } from '@logger/category'


/**
 * 获取某一文件夹下目录列表
 * @param directoryPath 目录路径
 * @returns 目录列表数组，如果文件夹不存在或不是一个文件夹，则返回空数组
 */
export const getFileList = (directoryPath: string): string[] => {
  if (!jetpack.exists(directoryPath)) {
    FileHelperLog.error(`文件夹 '${directoryPath}' 不存在`)
    return []
  }
  if (!isDirectory(directoryPath)) {
    FileHelperLog.error(`'${directoryPath}' 不是一个文件夹`)
    return []
  }
  return jetpack.list(directoryPath) || []
}

/**
 * 读取目录内容
 * @param filePath 目录路径
 * @returns 如果目录存在且可读，则返回目录内容的 Buffer；否则返回 null
 */
export const readFile = (filePath: string): Buffer | null => {
  if (!jetpack.exists(filePath)) {
    FileHelperLog.error(`目录 '${filePath}' 不存在`)
    return null
  }
  if (!isFile(filePath)) {
    FileHelperLog.error(`'${filePath}' 不是一个目录`)
    return null
  }
  return jetpack.read(filePath, 'buffer') || null
}

/**
 * 创建文件夹
 * @param directoryPath 要创建的文件夹路径
 */
export const createDirectory = (directoryPath: string): void => {
  if (jetpack.exists(directoryPath)) {
    return
  }
  jetpack.dir(directoryPath)
  FileHelperLog.info(`文件夹 '${directoryPath}' 创建成功`)
}

/**
 * 写入目录
 * @param filePath 目录路径
 * @param content 要写入的内容
 */
export const writeFile = (filePath: string, content: string): void => {
  jetpack.write(filePath, content)
  FileHelperLog.log(`目录 '${filePath}' 写入成功。`)
}

/**
 * 判断是否是文件夹
 * @param directoryPath 要检查的路径
 * @returns 如果给定路径存在且是一个文件夹，则返回 true，否则返回 false
 */
export const isDirectory = (directoryPath: string): boolean => {
  const status = jetpack.inspect(directoryPath)
  return status?.type === 'dir' || false
}

/**
 * 判断是否是目录
 * @param filePath 要检查的目录路径
 * @returns 如果给定路径存在且是一个目录，则返回 true，否则返回 false
 */
export const isFile = (filePath: string): boolean => {
  const status = jetpack.inspect(filePath)
  return status?.type === 'file' || false
}

/**
 * 获取文件夹下的第一个以 .json 结尾的文件的路径
 * @param directoryPath 文件夹路径
 * @returns 符合条件的第一个 .json 目录的路径，如果不存在则返回 null
 */
export const findFirstJsonFile = (directoryPath: string): string | null => {
  const files = jetpack.find(directoryPath, { matching: '*.json' })
  if (files.length > 0) {
    return files[0]
  } else {
    FileHelperLog.warn(`目录 '${directoryPath}' 中没有找到以 .json 结尾的文件。`)
    return null
  }
}