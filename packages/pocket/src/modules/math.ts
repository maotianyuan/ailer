/**
 * 生成一个指定范围内的随机整数
 * @param from 随机数范围的起始值（包含）
 * @param to 随机数范围的结束值（包含）
 * @returns 生成的随机整数
 */
const random = (from: number, to: number): number => {
  return Number.parseInt((Math.random() * (to - from + 1) + from).toString());
};

/**
 * 返回一个在指定范围内的值
 * 如果最小值大于最大值，则会自动交换它们
 * @param v 要约束的值
 * @param min 范围的最小值
 * @param max 范围的最大值
 * @returns 指定范围内的约束值
 */
function clamp(v: number, min: number, max: number): number {
  if (min > max) {
    [min, max] = [max, min]
  }
  return Math.min(max, Math.max(min, v))
}

export {
  random,
  clamp
}