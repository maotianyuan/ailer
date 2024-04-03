import { resolve } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';

const config = {
  treeshake: {
    moduleSideEffects: 'no-external',
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false
  },
  input: resolve('src/index.ts'),
  output: [
    { file: resolve('dist/bundle.esm.js'), format: 'esm' },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      extensions: ['.js', '.ts'],
      exclude: "node_modules/**"
    }),
    eslint({
      throwOnError: true,
      throwOnWarning: false,
      include: ['src/**'],
      exclude: 'node_modules/**',
    }),
    typescript(),
  ],
}

export default config
