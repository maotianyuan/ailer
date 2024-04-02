/**
 * 创建一个包含指定长度的数组，并使用指定的值填充该数组
 * @param length 要创建的数组的长度
 * @param value 要填充到数组中的值
 * @returns 填充后的数组
 */
export const fill = <T>(length: number, value: T): T[] => {
  return Array.from<T>({ length }).fill(value);
};