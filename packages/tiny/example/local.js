const { tinyLottie } = require('../dist/bundle.cjs.js');
const path = require('path');

/** Base64 压缩 */
tinyLottie({
  type: 'TinyLottieBase64',
  options:
  {
    config: {
      key: '你的KEY',
    },
    input: './public/TinyLottieBase64/input',
    output: {
      dir: './public/TinyLottieBase64/output',
    },
  }
})

/** 内置 转化为 外置 */
// tinyLottie({
//   type: 'TinyLottieIn2Out',
//   options:
//   {
//     config: {},
//     input: './public/TinyLottieIn2Out/input',
//     output: {
//       dir: './public/TinyLottieIn2Out/output',
//     },
//   }
// })


/** 外置 转化为 内置 */
// tinyLottie({
//   type: 'TinyLottieOut2In',
//   options:
//   {
//     config: {},
//     input: './public/TinyLottieOut2In/input',
//     output: {
//       dir: './public/TinyLottieOut2In/output',
//     },
//   }
// })