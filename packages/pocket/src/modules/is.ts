import type { RgbColor } from '../types'

const isBase64 = (str: string): boolean => {
  return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==$/i.test(str)
};


/**
 * 函数“isType”检查给定的上下文是否属于指定的类型。
 * @param {string} type - “type”参数是一个字符串，表示您要检查的数据类型。
 */
const isType = (type: string) => (context: any) =>
  Object.prototype.toString.call(context) === `[object ${type}]`


/**
 * TypeScript 中的“isRgbColor”函数通过验证数组结构和通道值来检查给定颜色是否为 RGB 格式。
 * @param {any} color - “isRgbColor”函数中的“color”参数表示一个值，通过检查该值来确定它是否是 RGB 颜色。它应该是一个包含 3 或 4
 * 个数值的数组，分别代表红色、绿色、蓝色通道（以及可选的 alpha 通道）
 * @returns `isRgbColor` 函数返回一个布尔值，指示输入的 `color` 是否是有效的 RGB
 * 颜色。该函数检查“color”是否是一个数组，然后根据特定条件验证数组中的每个通道值。如果所有通道值都通过验证，且数组长度为 3 或 4，则函数返回 true，表示输入
 */
const isRgbColor = (color: any): color is RgbColor => {
  if (!Array.isArray(color)) {
    return false;
  }

  const isValidChannelValue = (value: any, index: number): boolean => {
    if (index === 3) {
      return value === undefined || Number(value) <= 1;
    } else {
      return Number(value) <= 255 && Number(value) >= 0;
    }
  };

  return (color.length === 4 || color.length === 3) && color.every(isValidChannelValue);
};

/**
 * 判断一个字符串是否为有效的十六进制颜色代码
 * @param color - 待验证的字符串
 * @returns 如果是有效的十六进制颜色代码则返回 true，否则返回 false
 */
const isHexColor = (color: string): boolean => /^#?[0-9a-fA-F]{3,8}$/.test(color);




export {
  isType,
  isBase64,
  isHexColor,
  isRgbColor,
}