/**
 * 获取 localStorage 中指定键的值
 * @param key 要获取值的键
 * @returns 如果存在指定键，则返回对应的值，否则返回 null
 */
const getLocalStorageItem = <T>(key: string): T | null => {
  const storedItem = localStorage.getItem(key);
  if (storedItem) {
    try {
      return JSON.parse(storedItem);
    } catch (error) {
      console.error('Error parsing localStorage item:', error);
      return null;
    }
  }
  return null;
};

/**
 * 设置 localStorage 中指定键的值
 * @param key 要设置值的键
 * @param value 要设置的值
 */
const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error serializing value for localStorage:', error);
  }
};

/**
 * 移除 localStorage 中指定键的值
 * @param key 要移除值的键
 */
const removeLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};

export {
  getLocalStorageItem as getItem,
  setLocalStorageItem as setItem,
  removeLocalStorageItem as removeItem,
};
