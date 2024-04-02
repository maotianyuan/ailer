/**
 * 从数组中移除重复的元素并返回一个新的数组
 * @param arr 要移除重复元素的数组
 * @returns 不包含重复元素的新数组
 */
export const unique = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};