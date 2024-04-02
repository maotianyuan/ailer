type LoadMethod = (file: string) => Promise<[any, any]>

interface IdleDeadline {
  didTimeout: boolean;
  timeRemaining: () => number;
}

type IdleCallback = (deadline: IdleDeadline) => void;

const idleTime = 15


/**
 * 模拟浏览器的 requestIdleCallback 函数
 * @param cb 回调函数
 * @returns 超时标识
 */
export const requestIdleCallback = (callback: IdleCallback, options?: { timeout: number }): NodeJS.Timeout => {
  const start = Date.now();

  const idleCallback = () => {
    const timeRemaining = () => Math.max(0, options?.timeout || 50 - (Date.now() - start));
    const didTimeout = timeRemaining() <= 0;

    callback({
      didTimeout,
      timeRemaining,
    });
  };

  return setTimeout(idleCallback, 1); // 使用一个小的超时值，以确保回调函数在下一个事件循环周期中执行
};


/**
 * 空闲时加载资源
 * @param files 要加载的资源列表
 * @param loadMethod 加载资源的方法
 */

export const idleLoadResource = (files: string[], loadMethod: LoadMethod) => {
  let asyncLoadSuccess = true
  const tasks = (dealLine: IdleDeadline) => {
    const length = files.length
    if (dealLine.timeRemaining() > idleTime && length > 0 && asyncLoadSuccess) {
       console.log('[Idle Load]: Idle loading resources, idle time remaining: ', dealLine.timeRemaining());
      const file = files.pop()
      if (file) {
        asyncLoadSuccess = false
        loadMethod(file)
          .then(() => {
            asyncLoadSuccess = true
          })
          .catch((err: any) => {
            console.error(`[Idle Load]: Loading error, cancel preloading of this resource ${file}`, JSON.stringify(err));
            asyncLoadSuccess = true
          })
      }
    }

    if (length > 0) {
      requestIdleCallback(tasks)
    }
  }
  requestIdleCallback(tasks)
}
