interface ImageSize {
  width: number;
  height: number;
}

const DEFAULT_MIMETYPE = 'image/png';

/**
 * 将 HTML 图像元素转换为具有指定大小的画布元素
 * @param img 一个 HTMLImageElement 对象，表示要转换为画布的图像
 * @param size 可选参数，指定所需的画布宽度和高度。默认为输入图像的自然宽度和高度
 * @returns 具有指定大小的画布元素和在其上绘制的图像
 */

export const imageToCanvas = (img: HTMLImageElement, size: ImageSize = { width: img.naturalWidth, height: img.naturalHeight }): HTMLCanvasElement => {
    // 创建画布元素
    const canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    
    // 在画布上绘制图像
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    
    return canvas;
};


/**
 * 将 HTML 图像元素转换为数据 URI
 * @param img HTMLImageElement 对象，表示需要转换为数据 URI 的图像
 * @param type 图像的 MIME 类型。默认为 "image/png"
 * @returns 作为参数传递的图像的数据 URI
 */
export const imageToDataURI = (img: HTMLImageElement, type = DEFAULT_MIMETYPE): string => {
    // 将图像转换为画布
    const canvas = imageToCanvas(img);
    
    // 返回图像的数据 URI
    return canvas.toDataURL(type);
};

/**
 * 将 HTML 图像元素转换为 Blob 对象
 * @param img HTMLImageElement 对象，表示需要转换为 Blob 对象的图像
 * @returns 返回一个 Promise，解析为图像的 Blob 对象
 */
export const imageToBlob = (img: HTMLImageElement): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    // 将图像转换为画布
    const canvas = imageToCanvas(img);
    
    // 将画布转换为 Blob 对象
    canvas.toBlob((blob) => {
      if (blob) {
        // 如果 Blob 对象存在，则解析 Promise
        resolve(blob);
      } else {
        // 如果 Blob 对象不存在，则拒绝 Promise
        reject(undefined);
      }
    });
  });
};

