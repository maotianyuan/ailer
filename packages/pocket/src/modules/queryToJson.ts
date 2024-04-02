import { pipe } from './pipe'

interface QueryToJsonOptions {
  /**
   * 是否需要decode解码，默认true
   */
  shouldDecode: boolean
}

interface QueryToJSONResult {
  [key: string]: any
}

interface QueryResult {
  key: string
  value: string
}

/**
 * 将url地址的query参数转换为JSON数据
 * 1⃣️?a=1&b=2 => {a:1, b:2}
 * 2⃣️?a[0]=1 => {"a[0]": 1}
 * 3 支持多问号 ?a=1&#/result?b=1&a=2  => {b: 1, a: 2}
 * @param url url地址
 * @param options queryToJson选项参数
 * @param options.shouldDecode 是否需要decode解码，默认true
 */
export function queryToJson(url?: string, options?: QueryToJsonOptions): QueryToJSONResult {
  const mergedOptions = Object.assign(
    {
      shouldDecode: true,
    },
    options
  )

  url = (url || window.location.href.replace(window.location.hash, '')) + ''

  // 分割字符串
  const split = (str: string, sep: string) => str.split(sep)

  // 去掉字符串前后的空格、\n \t 等字符
  const trim = (str: string) => str.replace(/^\s*|\s*$/g, '')

  // 获取单个参数
  const getQuery = (opts: QueryToJsonOptions) => (query: string[]) => {
    if (query.length < 2) return
    const key = trim(query[0])
    const value = getQueryValue(query[1], opts)

    return { key, value }
  }

  // 将单个参数的键值添加到该json中
  const addToQueryJson = (result: QueryToJSONResult) => (map: QueryResult) => {
    if (!map) return Object.assign({}, result)

    const { key, value } = map

    if (result[key] === undefined) {
      result[key] = value
    } else {
      if (!(result[key] instanceof Array)) {
        // 啥意思？
        result[key] = [result[key]]
      }
      result[key].push(value)
    }

    return Object.assign({}, result)
  }

  // 获取单个问号的所有参数集合的json
  const getQueryItemJson = (params: string[]) =>
    params.reduce((result: QueryToJSONResult, current: string) => pipe(split, getQuery(mergedOptions), addToQueryJson(result))(current, '='), {})

  // 获取所有问号合并后的json
  const getQueryToJson = (params: string[]) =>
    params.reduce((result: QueryToJSONResult, current: string) => {
      const currentResult = pipe(split, getQueryItemJson)(current, '&')
      return Object.assign(result, currentResult)
    }, {})

  // 获取单个参数的值
  function getQueryValue(val: string, options: QueryToJsonOptions) {
    let _val = val

    if (options.shouldDecode) {
      try {
        _val = decodeURIComponent(val)
      } catch (ex) {
        console.error(ex)
      }
    }

    return _val
  }

  return pipe(split, getQueryToJson)(url, '?')
}
