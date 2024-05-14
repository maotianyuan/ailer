const path = require('path');
const { TinyLottieOuter, TinyLottieInner } = require('@ailer/tiny')

// new TinyLottieOuter({
//   config: {
//     /** 外挂 熊猫 PNG 压缩 */
//     isTinyPng: false,
//     /** 外挂 图片地址 */
//     images: 'images',
//     /** 压缩后 外挂 图片地址 */
//     tinypng: 'tinypng',
//   },
//   input: {
//     '精英': path.resolve(process.cwd(), 'public', 'assets', '精英'),
//     '学霸': path.resolve(process.cwd(), 'public', 'assets', '学霸'),
//     '学神': path.resolve(process.cwd(), 'public', 'assets', '学神'),
//   },
//   output: {
//     dir: path.resolve(process.cwd(), 'public', 'compress')
//   }
// });


/** 对 base64json 文件的图片进行压缩，同时讲图片提取出来 */
new TinyLottieInner({
  config: {
    isTinyPng: true,
    /** 外挂 图片地址 */
    images: 'images',
    /** 压缩后 外挂 图片地址 */
    tinypng: 'tinypng',
  },
  input: {
    'qiaoheiban': path.resolve(process.cwd(), 'public', 'assets', 'qiaoheiban'),
  },
  output: {
    dir: path.resolve(process.cwd(), 'public', 'compress')
  }
});

