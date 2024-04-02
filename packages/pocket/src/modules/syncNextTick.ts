/**
 * 返回一个 Promise，在下一个 Vue.js 的 tick 循环中解析
 * 此函数用于在 Vue.js 更新 DOM 后执行同步操作
 * @param vueInstance Vue 实例
 * @returns 一个 Promise，在下一个 Vue.js 的 tick 循环中解析为 null
 */
export const syncNextTick = (vueInstance: any): Promise<null> => {
  return new Promise((resolve) => {
    vueInstance.$nextTick(() => {
      resolve(null);
    });
  });
};