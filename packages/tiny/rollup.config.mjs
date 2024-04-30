import { resolve } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
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
  input: resolve('src/index.ts'),
  output: [
    { file: resolve('dist/index.js'), format: 'cjs' },
  ],
  plugins: [
    nodeResolve(),
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
