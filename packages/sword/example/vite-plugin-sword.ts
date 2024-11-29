import fs from 'fs';
import path from 'path';
import { Plugin } from 'vite';

// 读取 dist 目录下的所有组件
const scanComponents = (distDir: string) => {
  const files = fs.readdirSync(distDir);
  const components: string[] = [];

  files.forEach(file => {
    const filePath = path.join(distDir, file);
    const stat = fs.statSync(filePath);

    // 只处理 .js 文件
    if (stat.isFile() && file.endsWith('.js')) {
      components.push(filePath);
    }
  });

  return components;
};

// 插件主逻辑
export default function vitePluginSword(options: { distDir: string }): Plugin {
  const distDir = path.resolve(options.distDir);

  return {
    name: 'vite-plugin-sword',

    // 解析 @ailer/sword 模块路径
    resolveId(id) {
      if (id.startsWith('@ailer/sword')) {
        const relativePath = id.slice('@ailer/sword'.length);

        // 如果是按需导入，处理 `@ailer/sword/Button` 之类的路径
        if (relativePath && relativePath !== '/') {
          const componentPath = path.join(distDir, `${relativePath}.js`);
          if (fs.existsSync(componentPath)) {
            return componentPath;  // 返回打包组件的路径
          }
        }

        // 聚合导入时，处理 `@ailer/sword`，返回 index.js
        if (id === '@ailer/sword') {
          return path.join(distDir, 'index.js');
        }
      }

      return null;
    },

    // 加载模块内容
    load(id) {
      if (id === path.join(distDir, 'index.js')) {
        const components = scanComponents(distDir);
        let code = '';

        components.forEach(filePath => {
          const componentName = path.basename(filePath, '.js');
          code += `export { default as ${componentName} } from '${filePath}';\n`;
        });

        return code;  // 导出所有组件
      }

      if (id.endsWith('.js')) {
        const componentName = path.basename(id, '.js');
        return `export { default } from './${componentName}';`;  // 默认导出单个组件
      }

      return null;
    }
  };
}
