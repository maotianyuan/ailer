/**
 * 将数字转换为十六进制字符串，并确保输出的字符串是两位数，如果不足两位，则在前面补充零，并将结果转换为大写字母形式
 * @param n 要转换的数字
 * @returns 转换后的十六进制字符串
 */
export const toHex = (n: number): string => {
  return n.toString(16).padStart(2, '0').toUpperCase();
};
