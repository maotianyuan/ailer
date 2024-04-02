import { isBase64 } from './is'

/**
 * 将 base64 编码的数据转换为 Blob 对象
 * @param base64Data 包含 base64 编码数据的字符串
 * @param mimeType 可选，Blob 对象的 MIME 类型
 * @returns 返回 Blob 对象
 */
export const base64ToBlob = (base64Data: string, mimeType?: string): Blob => {
  // 判断是否为有效的 base64 编码字符串
  if (!isBase64(base64Data)) {
    throw new Error('提供的参数不是有效的 base64 编码字符串');
  }

  // 解析 base64 编码数据
  const [, base64Content] = base64Data.split(',');
  mimeType = mimeType || getMimeType(base64Data);

  // 将 base64 编码数据转换为二进制字符串
  const binaryString = atob(base64Content);

  // 创建 Uint8Array 数组
  const byteArray = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    byteArray[i] = binaryString.charCodeAt(i);
  }

  // 返回 Blob 对象
  return new Blob([byteArray], { type: mimeType });
}

/**
 * 获取 base64 编码字符串中的 MIME 类型
 * @param base64Data 包含 base64 编码数据的字符串
 * @returns 返回 MIME 类型字符串，如果未提供则返回 'application/octet-stream'
 */  
const getMimeType = (base64Data: string): string => {
  const [, mimeType] = base64Data.split(';');
  return (mimeType || 'application/octet-stream').trim();
};