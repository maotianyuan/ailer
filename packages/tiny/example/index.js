const { TinyLottie, TinyImage } = require('../dist/index');
const path = require('path');

new TinyLottie({
  config: {
    isTinyPng: true,
    images: 'images',
    tinypng: 'tinypng',
  },
  input: {
    // 'right': path.resolve(process.cwd(), 'public', 'assets', 'right'),
    // 'wrong': path.resolve(process.cwd(), 'public', 'assets', 'wrong'),
    // 'join': path.resolve(process.cwd(), 'public', 'assets', 'join'),
    // 'noJoin': path.resolve(process.cwd(), 'public', 'assets', 'noJoin'),
    // 'keepTrying': path.resolve(process.cwd(), 'public', 'assets', 'keepTrying'),
    // 'label-1': path.resolve(process.cwd(), 'public', 'assets', 'label-1'),
    // 'label-2': path.resolve(process.cwd(), 'public', 'assets', 'label-2'),
    // 'label-3': path.resolve(process.cwd(), 'public', 'assets', 'label-3'),
    // 'label-4': path.resolve(process.cwd(), 'public', 'assets', 'label-4'),
  },
  output: {
    dir: path.resolve(process.cwd(), 'public', 'compress')
  }
});
