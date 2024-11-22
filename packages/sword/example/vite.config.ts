import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { visualizer } from 'rollup-plugin-visualizer';
import VitePluginImport from 'vite-plugin-import' // 导入按需加载插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    visualizer({
      open: false, // 构建完成后自动打开分析报告
    }),
    VitePluginImport({
      libraryName: 'sword',  // 组件库名
      libraryDirectory: 'es',       // 组件库目录（确保你的组件是按目录结构导出的）
      style: true,                  // 是否自动引入样式
    }),
  ],
  build: {
    rollupOptions: {
      treeshake: true,  // 确保按需加载的功能正常
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
