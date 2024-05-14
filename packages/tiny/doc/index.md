# 快速开始


## 引入
```js
const path = require('path');
const { TinyLottieOuter, TinyLottieInner } = require('@ailer/tiny')
```
## 密钥

- 创建 .env目录, 存放 TINYPNG_API_KEY API, 申请 熊猫 Key, 注意有次数限制
```js
TINYPNG_API_KEY=***
```

## 压缩外挂图片，并生成内置 Lottie JSON
```js
new TinyLottieOuter({
  config: {
    /** 外挂 熊猫 PNG 压缩 */
    isTinyPng: true,
    /** 外挂 图片地址 */
    images: 'images',
    /** 压缩后 外挂 图片地址 */
    tinypng: 'tinypng',
  },
  input: {
    '精英': path.resolve(process.cwd(), 'public', 'assets', '精英'),
    '学霸': path.resolve(process.cwd(), 'public', 'assets', '学霸'),
    '学神': path.resolve(process.cwd(), 'public', 'assets', '学神'),
  },
  output: {
    dir: path.resolve(process.cwd(), 'public', 'compress')
  }
});
```

## 压缩内置 Lottie，并生成压缩后内置 Lottie JSON
```js
new TinyLottieOuter({
  config: {
    /** 外挂 熊猫 PNG 压缩 */
    isTinyPng: true,
    /** 外挂 图片地址 */
    images: 'images',
    /** 压缩后 外挂 图片地址 */
    tinypng: 'tinypng',
  },
  input: {
    '精英': path.resolve(process.cwd(), 'public', 'assets', '精英'),
    '学霸': path.resolve(process.cwd(), 'public', 'assets', '学霸'),
    '学神': path.resolve(process.cwd(), 'public', 'assets', '学神'),
  },
  output: {
    dir: path.resolve(process.cwd(), 'public', 'compress')
  }
});
```


## 不压缩内置 Lottie，并生成外挂 Lottie
```js
new TinyLottieOuter({
  config: {
    /** 外挂 熊猫 PNG 压缩 */
    isTinyPng: false,
    /** 外挂 图片地址 */
    images: 'images',
  },
  input: {
    '精英': path.resolve(process.cwd(), 'public', 'assets', '精英'),
    '学霸': path.resolve(process.cwd(), 'public', 'assets', '学霸'),
    '学神': path.resolve(process.cwd(), 'public', 'assets', '学神'),
  },
  output: {
    dir: path.resolve(process.cwd(), 'public', 'compress')
  }
});
```