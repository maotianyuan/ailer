import SoLink from './src/index.vue';
import type { App } from "vue";

SoLink.install = (app: App) => {
  app.component(SoLink.name as string, SoLink);
};

export { SoLink };
