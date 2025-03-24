import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GoLib",
  description: "Documentation of GoLib",
  markdown: {
    container: {
      tipLabel: '💡TIP',
      warningLabel: '⚠WARNING',
      dangerLabel: '❗DANGER',
      infoLabel: '❔INFO',
      detailsLabel: 'DETAILS'
    }
  },
  base : `/repo`,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learn', link: '/learn/quick-start' }
    ],

    sidebar: {
      '/learn/': [
        {
        items:[
          { text: 'Quick start', link: '/learn/quick-start' },
          {text: 'Basics', items:[
            { text: 'Atoms', link: '/learn/basics/atoms' },
            { text: 'Table atom', link: '/learn/basics/table-atom' },
            { text: 'Server', link: '/learn/basics/server' },
          ]},
        ]
      }
      ]
    },

    socialLinks: [
    ]
  }
})
