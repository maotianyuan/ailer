/**
 * 格式化时间
 * @param time 要格式化的时间（秒）
 * @param format 输出的时间格式，可选值为 'hh:mm:ss'（默认）和 'HH小时mm分钟ss秒'
 * @returns 格式化后的时间字符串
 * @throws 如果传入的时间为负数，则抛出 RangeError
 * @throws 如果传入的格式不正确，则抛出 Error
 * @example
 * // 返回值为 "01:23:45"
 * formatTime(5025);
 * // 返回值为 "140小时15分钟12秒"
 * formatTime(12121212, 'HH小时mm分钟ss秒')
 */
export const formatTime = (time: number, format: 'hh:mm:ss' | 'HH小时mm分钟ss秒' = 'hh:mm:ss'): string => {
  if (time < 0) {
    throw new RangeError('时间不能为负数');
  }

  if (!['hh:mm:ss', 'HH小时mm分钟ss秒'].includes(format)) {
    throw new Error('不支持的格式');
  }

  const padZero = (num: number) => (num < 10 ? '0' + num : num.toString());

  const formatHandlers: { [key: string]: (hours: number, minutes: number, seconds: number) => string } = {
    'hh:mm:ss': (hours, minutes, seconds) => `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`,
    'HH小时mm分钟ss秒': (hours, minutes, seconds) => `${hours}小时${minutes}分钟${seconds}秒`,
  };

  const hours: number = Math.floor(time / 3600);
  const minutes: number = Math.floor((time % 3600) / 60);
  const seconds: number = Math.floor(time % 60);

  return formatHandlers[format](hours, minutes, seconds);
};
