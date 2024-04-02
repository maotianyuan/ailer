/**
 * 创建一个 Promise，在指定的毫秒数后解析
 * @param ms 超时时间（以毫秒为单位）
 * @returns 一个 Promise，在指定的时间后解析
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};