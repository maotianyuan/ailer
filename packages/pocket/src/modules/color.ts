import type { RgbColor } from '../types'
import { isRgbColor, isHexColor } from './is'
import { toHex } from './to'
import { stripPrefix } from './string'


/**
 * 将 RGB 颜色数组转换为十六进制颜色代码
 * @public
 * @param rgb - 参数 `rgb` 应该是一个数字数组，表示 RGB 颜色模型中颜色的红色、绿色和蓝色值。它还可能包括一个可选的第四个值，表示颜色的
 * alpha（透明度）值。
 * @returns 函数 rgb_to_hex 返回一个字符串，表示给定 RGB 颜色的十六进制颜色代码。如果 RGB 颜色有一个 alpha 通道，该函数返回一个字符串，表示带有 alpha
 * 通道的十六进制颜色代码
 */
const rgbToHex = (rgb: RgbColor): string => {
  if (!isRgbColor(rgb)) {
    throw new Error('RGB 颜色数组必须包含 3 个元素');
  }
  // 将每个颜色通道的值转换为十六进制字符串
  const [r, g, b] = rgb.map((value): string => toHex(Number(value)));


  // 如果包含透明度，则将透明度转换为十六进制字符串
  if (rgb.length === 4) {
    const a = rgb[3] !== undefined ? toHex(Number(rgb[3]) * 255) : '';
    return `#${r}${g}${b}${a}`;
  }

  // 拼接十六进制颜色代码并返回
  return `#${r}${g}${b}`;
}

/**
 * 将十六进制颜色代码转换为 RGB 颜色数组
 * @param hex - 要转换的十六进制颜色代码
 * @returns 返回 RGB 颜色数组，包含红色、绿色和蓝色通道的值
 * @throws 如果提供的颜色代码无效，则抛出错误
 */
const hexToRgb = (hex: string): RgbColor => {
  hex = stripPrefix(hex, '#')
  if (!isHexColor(hex)) {
    throw new Error('不是一个颜色值');
  }
  // 处理缩写的十六进制颜色代码（例如：#abc）
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, '$1$1');
  }
  
  const [r, g, b] = [0, 2, 4].map(start => parseInt(hex.substring(start, start + 2), 16));
  return [r, g, b];
}


export {
    rgbToHex,
    hexToRgb,
}
