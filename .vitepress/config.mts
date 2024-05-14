import { defineConfig } from 'vitepress'
import { SideBar } from './sidebar.mjs'


const { list: PocketSideBar } = new SideBar('pocket');
const { list: TinySidebar } = new SideBar('tiny');

export default defineConfig({
  title: 'Ailer',
  description: '前端工程师-工具库',
  base: '/ailer/',
  themeConfig: {
    nav: [
      { text: 'Pocket', link: '/packages/pocket/doc/pocket' },
      { text: 'Tiny', link: '/packages/tiny/doc/index' },
    ],
    sidebar: [
      {
        text: 'Pocket',
        items: PocketSideBar,
        collapsed: true,
      },
      {
        text: 'Tiny',
        items: TinySidebar,
        collapsed: true,
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maotianyuan/ailer/tree/main/packages' },
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: '在 MIT 许可下发布',
      copyright: '版权所有 © 2023-至今 MTY'
    },
  },

  markdown: {
    theme: {
      light: 'light-plus',
      dark: 'github-dark',
    },
  },
})
