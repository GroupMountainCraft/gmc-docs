import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/gmc-docs/",
  head: [["link", { rel: "icon", href: "/img/logo.svg" }]],
  title: "GMC服务器",
  description: "笨蛋学渣什么都没有留下",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '服规', link: '/Server_rules' }
    ],
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    sidebar: [
      {
        text: '欢迎',
        items: [
          { text: '服规', link: '/Server_rules' },
          { text: '三服百科', link: '/GMC三服百科.md' },
          { text: '指令指南', link: '/服务器常用指令指南.md' },
          { text: '赞助我们', link: '/赞助.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuezha-w' }
    ]
  }
})
