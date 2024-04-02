/**
 * 将多维数组扁平化为一维数组。
 * @param arr 要扁平化的数组。
 * @param deep 扁平化的深度，默认为 1。
 * @returns 扁平化后的数组。
 */
export const flat = (arr: any[], deep: number = 1): any[] => {
  return arr.reduce<any[]>((acc, cur) => {
    return Array.isArray(cur) && deep > 1
      ? [...acc, ...flat(cur, deep - 1)]
      : [...acc, cur];
  }, []);
};
