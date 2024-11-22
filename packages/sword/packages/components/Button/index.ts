import Button from './src/index.vue';
import type { App } from "vue";

// 为组件声明 install 方法
Button.install = (app: App) => {
  app.component(Button.name as string, Button);
};

// 导出默认组件和类型
export default {
  install: (app: App) => {
    app.component(Button.name as string, Button);
  },
};
export { Button };
