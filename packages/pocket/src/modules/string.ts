/**
 * 计算字符串的字节数
 * 英文字符算一个字节，中文字符算两个字节
 * @param str 要计算字节数的字符串
 * @returns 字符串的字节数
 */
const bytesLength = (str: string = ''): number => {
  let bytesLength = 0;

  // 遍历字符串的每一个字符
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    // 判断字符是否为中文字符
    if (/[\u4e00-\u9fa5]/.test(char)) {
      bytesLength += 2; // 中文字符算两个字节
    } else {
      bytesLength += 1; // 非中文字符（英文字符）算一个字节
    }
  }

  return bytesLength;
};

/**
 * 如果字符串以指定的前缀开头，则去除该前缀并返回结果字符串；否则返回原始字符串
 * @param s - 待处理的字符串
 * @param prefix - 要去除的前缀
 * @returns 如果字符串以指定的前缀开头，则返回去除前缀的结果字符串；否则返回原始字符串
 */
const stripPrefix = (s: string, prefix: string): string => s.startsWith(prefix) ? s.substring(prefix.length) : s;

/**
 * 如果字符串不以指定的前缀开头，则在字符串前添加前缀。
 * @param str 要处理的字符串
 * @param prefix 要确保存在的前缀
 * @returns 添加了前缀的字符串
 */
const ensurePrefix = (s: string, prefix: string): string =>  s.startsWith(prefix) ? s : prefix + s;

export {
  bytesLength,
  stripPrefix,
  ensurePrefix,
}
