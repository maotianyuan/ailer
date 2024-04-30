import { ModuleName } from './interface'
import { CategoryConsole } from './console'

export function category(name: string) {
  return new CategoryConsole(name)
}
export const FileHelperLog = category(ModuleName.FileHelper);
export const TinyLottieLog = category(ModuleName.TinyLottieLog);