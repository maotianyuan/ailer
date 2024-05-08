const { TinyLottie, TinyImage } = require('../dist/index');
const path = require('path');

new TinyLottie({
  config: {
    isTinyPng: true,
    images: 'images',
    tinypng: 'tinypng',
  },
  input: {
    // xiaolian: path.resolve(process.cwd(), 'public', 'assets', 'xiaolian'),
    bunting: path.resolve(process.cwd(), 'public', 'assets', 'bunting'),
    // caidai: path.resolve(process.cwd(), 'public', 'assets', 'caidai'),
    // credit: path.resolve(process.cwd(), 'public', 'assets', 'credit'),
  },
  output: {
    dir: path.resolve(process.cwd(), 'public', 'compress')
  }
});
