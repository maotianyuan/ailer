import { LogLevel, IConsoleInterface } from './interface'

export class CategoryConsole implements IConsoleInterface {
  private module: string = ''
  constructor(module: string) {
    this.module = module
  }
  public trace(...args: any) {
    console.log(this.module, LogLevel.TRACE, ...args)
  }
  public debug(...args: any) {
    console.log(this.module, LogLevel.DEBUG, ...args)
  }
  public log(...args: any) {
    console.log(this.module, LogLevel.INFO, ...args)
  }
  public info(...args: any) {
    console.log(this.module, LogLevel.INFO, ...args)
  }
  public error(...args: any) {
    console.log(this.module, LogLevel.ERROR, args)
  }
  public fatal(...args: any) {
    console.log(this.module, LogLevel.FATAL, ...args)
  }
  public mark(...args: any) {
    console.log(this.module, LogLevel.MARK, ...args)
  }
  public warn(...args: any) {
    console.log(this.module, LogLevel.WARN, ...args)
  }
}
