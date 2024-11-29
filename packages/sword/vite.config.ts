import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts";
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs'
import { resolve } from 'path'

// 读取 components 目录，自动生成输入配置
const componentsDir = resolve(__dirname, './packages/components')
const components = fs.readdirSync(componentsDir)
const input = {};
components.forEach((name) => {
  input[name] = `packages/components/${name}/index.ts`;
})

console.log(input)
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    dts({
      include: ["packages"],
      outDir: 'dist/types', // 类型文件输出目录
      insertTypesEntry: true, // 自动插入 types 字段到 package.json
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url))
    },
  },
  build: {
    target: 'esnext',  // 确保目标支持现代 ES 功能
    lib: {
      entry: "packages/index.ts", // 这部分配置留空，单独的组件会通过 input 指定
      name: "Sword",
      fileName: (format) => `sword.${format}.js`,
    },
    // rollupOptions: {
    //   external: ["vue"], // 不打包 vue，假设外部依赖
    //   treeshake: true,
    //   output: [
    //     {
    //       format: 'esm',  // 输出为 ESM 格式，支持拆分多个文件
    //       entryFileNames: '[name].esm.js',  // 输出为 [name].esm.js 文件
    //       globals: {
    //         vue: "Vue", // 通过全局变量 Vue 访问 vue
    //       },
    //     },
    //     {
    //       format: 'umd',  // 输出为 UMD 格式
    //       entryFileNames: '[name].umd.js',  // 输出为 [name].umd.js 文件
    //       name: "Sword",  // UMD 格式需要指定全局变量名
    //       globals: {
    //         vue: "Vue", // 通过全局变量 Vue 访问 vue
    //       },
    //     },
    //   ],
    // },
    rollupOptions: {
      external: ["vue"],
      treeshake: true,
      input,
      output: [
        {
          format: 'esm',  // 输出 ESM 格式以支持摇树
          entryFileNames: '[name].js',  // 使用 [name] 来输出为组件单独的文件名
          globals: {
            vue: "Vue",
          },
          inlineDynamicImports: false,  // 禁用 inlineDynamicImports
        },
      ]
    },
  },
})
