/**
 * 从嵌套对象中获取指定路径的值
 * @param obj 要获取值的嵌套对象
 * @param path 要获取值的路径，路径由点号分隔
 * @returns 如果找到值，则返回该值；否则返回 null
 */
export const deepGet = <T>(nestedObj: { [key: string]: any }, path: string): T | null => {
  // 如果对象为 undefined、null 或路径不是字符串，则返回 null
  if (nestedObj === undefined || nestedObj === null || typeof path !== 'string') {
    return null;
  }

  // 将路径分割成数组
  const pathArray = path.split('.');

  // 如果路径数组为空，则返回 null
  if (!pathArray || pathArray.length === 0) {
    return null;
  }

  // 获取路径中的第一个属性的值
  const nextValue: any = nestedObj[pathArray.shift()!];

  // 如果存在下一级对象，则递归地调用 deepGet
  if (nextValue !== undefined) {
    if (pathArray.length > 0) {
      return deepGet(nextValue, pathArray.join('.'));
    }

    // 如果路径数组为空，则返回找到的值
    return nextValue;
  }

  // 如果找不到值，则返回 null
  return null;
};
