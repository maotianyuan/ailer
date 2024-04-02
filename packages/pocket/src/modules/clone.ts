/**
 * 克隆简单对象
 * @param data 要克隆的对象
 * @returns 克隆后的对象
 */
const cloneSimple =  <T extends object>(data: T): T => {
  if (!data) {
    return data
  }
  return JSON.parse(JSON.stringify(data))
};

/**
 * 克隆深层对象
 * @param value 要克隆的值
 * @param cache 克隆缓存，用于处理循环引用
 * @returns 克隆后的值
 */
const cloneDeep = (value: any, cache = new WeakMap()) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (cache.has(value)) {
    return cache.get(value);
  }

  if (value instanceof RegExp) return new RegExp(value)
  if (value instanceof Date) return new Date(value)

  const result = new value.constructor()
  cache.set(value, result)

  Object.keys(value).forEach(
    (key) => (result[key] = cloneDeep(value[key], cache))
  )
  return result
}

/**
 * 克隆对象，优先使用简单克隆方法，如果出错则使用深层克隆方法
 * @param source 要克隆的对象
 * @returns 克隆后的对象
 */
const clone = <T extends object>(source: T): T => {
  try {
    return cloneSimple(source)
  } catch (_) {
    return cloneDeep(source)
  }
}

export { clone, cloneSimple, cloneDeep }
