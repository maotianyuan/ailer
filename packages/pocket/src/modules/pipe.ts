/**
 * 函数组合， 执行顺序从左到右
 * 第一个函数参数可以传递多个参数，其他函数必须是单参数函数
 * @example
 *  const fn1 = (a0, a1, a3) => a0 + a1 + a2;
 *  const fn2 = (a0) => a0 * 10;
 *  const fn3 = (a0) => a0 + 2;
 *  const fn = pipe(fn1, fn2, fn3);
 *  const result = fn(1, 2, 3)  // => 1 * 2 * 3 = 6 * 10 = 60 + 2 => 62
 * @param fns 要组合的函数列表
 * @return 组合后的函数
 */
export function pipe(...fns: Function[]) {
  if (fns.length === 0) {
    throw new Error('组合函数需要至少一个参数！')
  }

  if (fns.length === 1) {
    return (...args: any[]) => fns[0](...args)
  }

  return (...args: any[]) => {
    const first = fns[0](...args)
    const restFns = fns.slice(1)
    return restFns.reduce((result: any, current: Function) => {
      return current(result)
    }, first)
  }
}
