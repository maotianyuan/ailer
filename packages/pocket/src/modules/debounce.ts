/**
 * 防抖函数，限制某个函数在连续触发的情况下只执行一次
 * @param callback 需要防抖的函数
 * @param delay 防抖延迟时间，默认为 500 毫秒
 * @param immediate 是否立即执行一次，默认为 true
 * @param hint 防抖期间执行的函数，用于提示
 * @returns 防抖后的函数
 */
export const debounce = (
  callback: (...args: any) => void,
  delay: number = 500,
  immediate: boolean = true,
  hint?: () => void
) => {
  let timer: NodeJS.Timeout | null = null;

  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate && !timer) {
      callback(...args);
    }
    timer = setTimeout(() => {
      if (!immediate) {
        callback(...args);
      }
      if (hint) {
        hint();
      }
      clearTimeout(timer!);
      timer = null;
    }, delay);
  };
};
