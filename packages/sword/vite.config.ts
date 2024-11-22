import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts";
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

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
  // server: {
  //   open: true, // 自动打开浏览器
  // },
  // root: './example', // 设置开发时的根目录为 example 文件夹
  build: {
    lib: {
      entry: "packages/index.ts",
      name: "Sword",
      fileName: (format) => `sword.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      treeshake: true,
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
