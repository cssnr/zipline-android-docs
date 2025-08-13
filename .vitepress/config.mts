import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  // base: '/path/',
  vite: {
    server: {
      allowedHosts: true,
    },
  },

  title: 'Zipline Android Documentation',
  description: 'Documentation for the Zipline Android Android Application.',
  head: [
    ['meta', { property: 'og:site_name', content: 'Zipline Android Documentation' }],
    ['meta', { property: 'og:title', content: 'Zipline Android' }],
    ['meta', { property: 'og:description', content: 'Documentation for the Zipline Android Android Application.' }],
    ['meta', { property: 'og:image', content: '/images/logo-lg.png' }],
    ['meta', { property: 'og:image:alt', content: 'Zipline Android' }],

    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['meta', { name: 'darkreader-lock' }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Zipline Android',
    logo: '/images/logo-sm.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/setup', activeMatch: '^/guides/' },
      { text: 'Documentation', link: '/docs/home', activeMatch: '^/docs/' },
      { text: 'Support', link: '/support' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub Source Code', link: 'https://github.com/cssnr/zipline-android' },
          { text: 'Diced Zipline Server', link: 'https://github.com/diced/zipline' },
          { text: 'Developer Site', link: 'https://cssnr.github.io/' },
          { text: 'Contribute', link: 'https://ko-fi.com/cssnr' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Setup', link: '/guides/setup' },
          { text: 'Uploading', link: '/guides/uploading' },
        ],
      },
      {
        text: 'Documentation',
        items: [
          { text: 'Home', link: '/docs/home' },
          { text: 'Files', link: '/docs/files' },
          { text: 'Users', link: '/docs/user' },
          { text: 'Settings', link: '/docs/settings' },
        ],
      },
      {
        text: 'Support',
        items: [{ text: 'Support', link: '/support' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cssnr/zipline-android' },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
      { icon: 'kofi', link: 'https://ko-fi.com/cssnr' },
    ],

    editLink: {
      pattern: 'https://github.com/cssnr/zipline-android-docs/blob/master/src/:path',
      text: 'View on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: 'C5CAXNAV8S',
      //   apiKey: '2485bd6cfe2823fac3a521edb6a3652f',
      //   indexName: 'zipline-android-docs',
      // },
    },

    // outline: 'deep',
  },
})
