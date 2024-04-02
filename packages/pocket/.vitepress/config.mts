import { basename } from 'path'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import fg from 'fast-glob'

interface IndexTree {
  [index: string]: {
    link: string
    items?: IndexTree
  }
}


function resolveTitle(title: string) {
  return title === 'utils' ? title : title.replace('pocket.', '')
}

// 将md文档列表转为树结构
function getTree(file: string, prefix: string, tree = {}) {
  const [ cur, ...rest ] = file.replace('.md', '').split('.')
  const curPath = prefix + cur
  if (!tree[curPath]) {
    tree[curPath] = {
      link: '/doc/' + curPath + '.md',
    }
  }
  if (rest.length > 0) {
    if (!tree[curPath].items) {
      tree[curPath].items = {}
    }
    getTree(rest.join('.'), curPath + '.', tree[curPath].items)
  }
}

// 将树结构转为目录数组
function treeToItems(tree: IndexTree) {
  const items: DefaultTheme.SidebarItem[] = []
  Object.keys(tree).forEach((key) => {
    const item: DefaultTheme.SidebarItem = {
      text: resolveTitle(key),
      link: tree[key].link,
    }
    if (tree[key].items) {
      if (!item.items) {
        item.items = []
      }
      item.items.push(...treeToItems(tree[key].items!))
    }
    items.push(item)
  })
  return items
}

const tree = fg.sync(['./doc/**/*.md'])
  .map((path) => basename(path))
  .reduce((tree, file) => {
      getTree(file, '', tree)
      return tree
  }, {})

const docs: DefaultTheme.SidebarItem[] = treeToItems(tree)

export default defineConfig({
  title: 'Pocket',
  description: '前端工程师-常用方法 JS 工具库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/doc/index' },
      { text: 'API', link: '/doc/pocket' },
    ],

    sidebar: [
      {
        text: 'pocket',
        items: docs,
      },
    ],

    editLink: {
      pattern: 'https://github.com/maotianyuan/mty/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maotianyuan/zero/packages/pocket' },
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
