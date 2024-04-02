/**
 * 获取当前页面的域名
 * @returns 当前页面的域名
 */
export const getDomain = (): string=> {
  const host = location.host
  const domainParts = host.split('.')
  return domainParts.slice(-2).join('.')
}