/**
 * 通过指定的 URL 下载文件
 * @param url - 文件的 URL 地址
 * @param fileName - 可选参数，指定下载文件的文件名
 */
const downloadByUrl = (url: string, fileName = ''): void => {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.setAttribute('download', fileName);
  
  // 兼容性处理：在某些浏览器中，需要将下载链接添加到文档中才能生效
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  
  anchor.click();

  // 点击后移除下载链接
  document.body.removeChild(anchor);
};




/**
 * 通过 Blob 对象进行文件下载
 * @param blob 要下载的 Blob 对象
 * @param fileName 下载的文件名（可选）
 */
const downloadByBlob = (blob: Blob, fileName = ''): void => {
  // 将 Blob 对象转换为 URL
  const url = URL.createObjectURL(blob);
  downloadByUrl(url, fileName)
  URL.revokeObjectURL(url);
}


/**
 * 通过 Canvas 元素下载图像文件
 * @param canvas HTMLCanvasElement 对象
 * @param fileName 下载的文件名（可选）
 * @param format 下载的文件格式（可选），默认为 'png'
 */
const downloadByCanvas = (canvas: HTMLCanvasElement, fileName: string = '', format: string = 'png'): void => {
  const dataURL = canvas.toDataURL(`image/${format}`);
  downloadByUrl(dataURL, fileName)
}

export { downloadByUrl, downloadByBlob, downloadByCanvas };