import { clamp } from './math';

/**
 * 将 Canvas 转换为图像对象
 * @param canvas 要转换的 Canvas 元素
 * @param quality 图像质量，范围在 0 到 1 之间，默认为 1
 * @returns 转换后的图像对象
 */
export const canvasToImage = (canvas: HTMLCanvasElement, quality: number = 1): HTMLImageElement => {
  // 使用 clamp 函数确保 quality 参数在 0 到 1 之间
  const clampedQuality = clamp(quality, 0, 1);
  
  // 创建图像对象
  const image = new Image();

  // 设置图像的 src 属性为 Canvas 的数据 URL，并指定图像格式和质量
  image.src = canvas.toDataURL('image/png', clampedQuality);
  
  // 返回图像对象
  return image;
};
