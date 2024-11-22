import Link from './src/index.vue';
import type { App } from "vue";

Link.install = (app: App) => {
  app.component(Link.name as string, Link);
};

export default Link;
