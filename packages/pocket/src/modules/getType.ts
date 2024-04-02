/**
 * 获取参数的类型
 * @param param 要获取类型的参数
 * @returns 参数的类型字符串
 */
export const getType = (param: any): string => {
  return Object.prototype.toString.call(param).slice(8, -1);
};
