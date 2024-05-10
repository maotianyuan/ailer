/**
 * 根据字节数，截取字符串
 * @param str 目标字符串
 * @param start 开始位置
 * @param end 结束位置，默认为字符串的字节数
 * @example
 * // Returns 'hell'
 * substringBytes('hello, 世界!', 0, 4);
 * @example
 * // Returns 'hello, 世界!'
 * substringBytes('hello, 世界!', 0);
 */
const substringBytes = (str: string = '', start: number, end?: number): string => {
  if (start < 0) {
    throw new Error('start must be non-negative.');
  }

  // 如果未提供 end 参数，则使用字符串的字节数
  end = end ?? bytesLength(str);

  if (start >= end) {
    throw new Error('start must be less than end.');
  }

  let len = 0;
  let result = '';
  let lastIndex = 0;

  // 预先计算字符串的长度，减少每次循环中的重复计算
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    const code = str.charCodeAt(i);
    const bytes = ((code >= 0 && code <= 255) || (code >= 0xff61 && code <= 0xff9f)) ? 1 : 2;

    // 更新字节数长度
    len += bytes;

    // 如果长度在范围内，则添加到结果字符串中
    if (len >= start && len <= end) {
      result += str[i];
      lastIndex = i;
    } else if (len > end) {
      // 如果超出范围，则退出循环
      break;
    }
  }

  // 如果截取的是辅助平面上的字符，将其补全，避免出现乱码
  const lastCode = result.charCodeAt(result.length - 1); // 截取的最后一个字符码
  const nextCode = str.charCodeAt(lastIndex + 1); // 未截取的第一个字符码

  if (lastCode >= 0xd800 && lastCode <= 0xdbff && nextCode >= 0xdc00 && nextCode <= 0xdfff) {
    result += str[lastIndex + 1];
  }

  return result;
};


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
  substringBytes,
  bytesLength,
  stripPrefix,
  ensurePrefix,
}
