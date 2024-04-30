export interface IConsoleInterface {
  info(message: string): void;
  debug(message: string): void;
  log(message: string): void;
  error(message: string): void;
  trace(message: string): void;
}
export enum LogLevel {
  // 所有日志
  ALL = 'ALL',
  // 追踪日志
  TRACE = 'TRACE',
  // 调试
  DEBUG = 'DEBUG',
  // 信息
  INFO = 'INFO',
  // 错误
  ERROR = 'ERROR',
  // 重大错误
  FATAL = 'FATAL',
  // 标记
  MARK = 'MARK',
  // 关闭
  OFF = 'OFF',
  // 警告
  WARN = 'WARN',
}



export const ModuleName = {
  FileHelper: 'FileHelper',
  TinyLottieLog: 'TinyLottieLog',
}