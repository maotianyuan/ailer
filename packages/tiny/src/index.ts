import { TinyLottieBase64 } from './core/LottieBase64'
import { TinyLottieOut2In } from './core/LottieOut2In'
import { TinyLottieIn2Out } from './core/LottieIn2Out'

export {
  TinyLottieBase64,
  TinyLottieOut2In,
  TinyLottieIn2Out,
}

enum ITinyLottie {
  TinyLottieBase64 = 'TinyLottieBase64',
  TinyLottieOut2In = 'TinyLottieOut2In',
  TinyLottieIn2Out = 'TinyLottieIn2Out',
}

interface ITinyLottieConfig {
  type: ITinyLottie;
  options: {
    input: string;
    output: {
      dir: string
    }
    /** 配置信息 */
    config: {
      /** 图片地址名 */
      key?: string
      images?: string
    }
  };
}

const tinyLottie = async (config: ITinyLottieConfig) => {
  const { type, options } = config;
  if (type === ITinyLottie.TinyLottieBase64) {
    const instance = new TinyLottieBase64(options)
    return await instance.execute()
  }
  if (type === ITinyLottie.TinyLottieOut2In) {
    const instance = new TinyLottieOut2In(options)
    return await instance.execute()
  }
  if (type === ITinyLottie.TinyLottieIn2Out) {
    const instance = new TinyLottieIn2Out(options)
    return await instance.execute()
  }
}
export {
  tinyLottie
}