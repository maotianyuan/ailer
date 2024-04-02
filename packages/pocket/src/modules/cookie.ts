/**
 * 设置 Cookie
 * @param name Cookie 名称
 * @param value Cookie 值
 * @param days 过期天数，默认为 1 天
 */
const setCookie = (name: string, value: string, days: number = 1): void => {
  if (!name || !value) {
    throw new Error('Cookie 名称和值不能为空');
  }
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue = encodeURIComponent(value) + (days ? `;expires=${expirationDate.toUTCString()}` : '');
  document.cookie = `${name}=${cookieValue};path=/`;
};

/**
 * 获取 Cookie
 * @param name Cookie 名称
 * @returns 如果找到 Cookie，则返回对应的值，否则返回 null
 */
const getCookie = (name: string): string | null => {
  if (!name) {
    throw new Error('Cookie 名称不能为空');
  }
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue || ''); // 处理 Cookie 值为空的情况
    }
  }
  return null;
};

/**
 * 删除 Cookie
 * @param name Cookie 名称
 */
const deleteCookie = (name: string): void => {
  if (!name) {
    throw new Error('Cookie 名称不能为空');
  }
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

export {
  setCookie,
  getCookie,
  deleteCookie,
}