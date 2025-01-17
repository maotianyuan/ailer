import { resolve } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const config = {
  treeshake: {
    moduleSideEffects: 'no-external',
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false
  },
  external: ['tinify'], // 告诉 Rollup 忽略对 imagemin 库的检查
  input: resolve('src/index.ts'),
  output: [
    { file: resolve('dist/bundle.cjs.js'), format: 'cjs' },
    { file: resolve('dist/bundle.esm.js'), format: 'esm' },
  ],
  plugins: [
    json(),
    nodeResolve({
      preferBuiltins: true // 设置 preferBuiltins 为 false 禁用对内置模块的优先使用
    }),
    commonjs(),
    babel({
      presets: ['@babel/preset-env'],
      extensions: ['.js', '.ts'],
      exclude: "node_modules/**",
      babelHelpers: 'bundled' // 显式地设置 babelHelpers 为 'bundled'
    }),
    eslint({
      throwOnError: true,
      throwOnWarning: false,
      include: ['src/**'],
      exclude: 'node_modules/**',
    }),
    typescript(),
    alias({
      entries: [
        { find: '@utils', replacement: './src/utils' },
        { find: '@core', replacement: './src/core' },
        { find: '@logger', replacement: './src/utils/logger' },
      ]
    }),
  ],
}

export default config