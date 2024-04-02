/**
 * 节流函数，限制某个函数在一定时间间隔内只能执行一次
 * @param fn 需要节流的函数
 * @param wait 节流时间间隔，默认为 1000 毫秒
 * @param options 控制节流行为的选项
 * @param options.leading 是否允许首次调用
 * @param options.trailing 是否允许最后一次调用
 * @param hint 节流期间执行的函数，用于提示
 * @returns 节流后的函数
 */
export const throttle = (
  fn: (...args: any) => void,
  wait: number = 1000,
  { leading = true, trailing = true }: { leading?: boolean, trailing?: boolean } = {},
  hint?: () => void
) => {
  let previous: number = 0;
  let timer: NodeJS.Timeout | null = null;

  return function (...args: any) {
    const now: number = Date.now();
    if (!previous && leading === false) {
      previous = now;
    }
    let remaining: number = wait - (now - previous);
    if (remaining < 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.call(this, ...args);
      previous = now;
    } else if (!timer && trailing) {
      if (hint) {
        hint.call(this);
      }
      timer = setTimeout(() => {
        fn.call(this, ...args);
        previous = leading === false ? 0 : Date.now();
        clearTimeout(timer!);
        timer = null;
      }, remaining);
    }
  };
};
