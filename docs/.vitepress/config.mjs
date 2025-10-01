
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VPS Setup Guide",
  description: "A comprehensive guide to setting up your own Virtual Private Server.",
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Chapter 1: Initial Server Connection', link: '/chapter1-initial-connection' },
          { text: 'Chapter 2: Basic Security', link: '/chapter2-basic-security' },
          { text: 'Chapter 3: Installing a Web Server', link: '/chapter3-web-server' },
          { text: 'Chapter 4: Installing Docker', link: '/chapter4-docker' },
          { text: 'Chapter 5: Deploying Projects', link: '/chapter5-deploying-projects' },
          { text: 'Chapter 6: Domain & SSL', link: '/chapter6-domain-ssl' },
          { text: 'Chapter 7: Basic Maintenance', link: '/chapter7-maintenance' }
        ]
      }
    ]
  }
})
