import SoButton from './src/index.vue';
import type { App } from "vue";

// 为组件声明 install 方法
SoButton.install = (app: App) => {
  app.component(SoButton.name as string, SoButton);
};

// 导出默认组件和类型
// export default {
//   install: (app: App) => {
//     app.component(Button.name as string, Button);
//   },
// };
export { SoButton };
