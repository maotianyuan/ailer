import { pipe } from './pipe';

/**
 * 函数组合，执行顺序从右到左
 * 最后一个函数参数可以传递多个参数，其他函数必须是单参数函数
 *@example
 *  const fn1 = (a0, a1, a3) => a0 + a1 + a2;
 *  const fn2 = (a0) => a0 * 10;
 *  const fn3 = (a0) => a0 + 2;
 *  const fn = compose(fn3, fn2, fn1);
 *  const result = fn(1, 2, 3)  // => 1 * 2 * 3 = 6 * 10 = 60 + 2 => 62
 * @param fns 要组合的函数数组
 * @returns 组合后的函数
 */
export const compose = (...fns: any[]) => pipe(...[...fns].reverse());
