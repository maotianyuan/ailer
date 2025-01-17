# 快速开始


## 引入
```js
import { tinyLottie } from '@mix-ability/tiny';
```

## Base64 压缩
```js
tinyLottie({
  type: 'TinyLottieBase64',
  options:
  {
    config: {
      key: '你的KEY',
    },
    /**
     * 绝对路径 input 放的文件
     * a.json
     * b.json
    */
    input: './public/TinyLottieBase64/input',
    output: {
      /** 绝对路径 */
      dir: './public/TinyLottieBase64/output',
    },
  }
})
```

## 内置 转化为 外置 
```js
tinyLottie({
  type: 'TinyLottieIn2Out',
  options:
  {
    config: {},
    /**
     * 绝对路径 input 放的文件
     * a.json
     * b.json
    */
    input: './public/TinyLottieIn2Out/input',
    output: {
      /** 绝对路径 */
      dir: './public/TinyLottieIn2Out/output',
    },
  }
})
```


## 外置 转化为 内置
```js
tinyLottie({
  type: 'TinyLottieOut2In',
  options:
  {
    config: {},
    /**
     * 绝对路径 input 放的文件
     * 文件夹A/xxx.json
     * 文件夹B/xxx.json
    */
    input: './public/TinyLottieOut2In/input',
    output: {
      /**
       * 绝对路径 output 放的文件
       * A.json
       * B.json
      */
      dir: './public/TinyLottieOut2In/output',
    },
  }
})
```