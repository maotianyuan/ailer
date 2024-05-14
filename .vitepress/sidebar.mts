import { basename } from 'path'
import fg from 'fast-glob'
import type { DefaultTheme } from 'vitepress'

interface IndexTree {
  [index: string]: {
    link: string
    items?: IndexTree
  }
}

export class SideBar {
  public moduleName: string = ''
  public list: DefaultTheme.SidebarItem[] = []
  constructor(name: string) {
    this.moduleName = name;
    this.getSideBar();
  }
  getSideBar() {
    this.list = this.treeToItems(this.proxyGetTree())
  }
  resolveTitle(title: string) {
    return title === 'utils' ? title : title.replace(`${this.moduleName}.`, '')
  }
  getTree(file: string, prefix: string, tree = {}) {
    const [ cur, ...rest ] = file.replace('.md', '').split('.')
    const curPath = prefix + cur
    if (!tree[curPath]) {
      tree[curPath] = {
        link: `/packages/${this.moduleName}/doc/` + curPath + '.md',
      }
    }
    if (rest.length > 0) {
      if (!tree[curPath].items) {
        tree[curPath].items = {}
      }
      this.getTree(rest.join('.'), curPath + '.', tree[curPath].items)
    }
  }
  treeToItems(tree: IndexTree) {
    const items: DefaultTheme.SidebarItem[] = []
    Object.keys(tree).forEach((key) => {
      const item: DefaultTheme.SidebarItem = {
        text: this.resolveTitle(key),
        link: tree[key].link,
      }
      if (tree[key].items) {
        if (!item.items) {
          item.items = []
        }
        item.items.push(...this.treeToItems(tree[key].items!))
      }
      items.push(item)
    })
    return items
  }
  proxyGetTree() {
    return fg.sync([`./packages/${this.moduleName}/doc/**/*.md`])
    .map((path) => basename(path))
    .reduce((tree, file) => {
        this.getTree(file, '', tree)
        return tree
    }, {})
  }
}

