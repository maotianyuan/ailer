const { TinyLottie } = require('../dist/index');
const path = require('path');

new TinyLottie({
  config: {
    tinyPngKey: 'S1l02pRSCWmbSHs0tFsnhZB2KQGD47Vw',
    isTinyPng: true,
    images: 'images',
    tinypng: 'tinypng',
  },
  input: {
    bunting: path.resolve(process.cwd(), 'public', 'assets', 'bunting'),
    // caidai: path.resolve(process.cwd(), 'public', 'assets', 'caidai'),
    // credit: path.resolve(process.cwd(), 'public', 'assets', 'credit'),
  },
  output: {
    dir: path.resolve(process.cwd(), 'public', 'compress')
  }
});