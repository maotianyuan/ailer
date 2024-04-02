/**
 * 将指定 URL 的资源转换为 Blob 对象
 * @param url 资源的 URL
 * @returns Promise 包含 Blob 对象的结果
 */
export const fetchBlob = async (url: string): Promise<Blob> => {
  try {
    // 发起 GET 请求获取资源
    const response = await fetch(url);

    // 确认请求成功
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }

    // 将响应数据转换为 Blob 对象并返回
    return await response.blob();
  } catch (error: any) {
    // 捕获异常并抛出
    throw new Error(`Failed to fetch ${url}:`, error);
  }
};
