import { defineConfig } from 'vitepress'

const settings = {
  title: 'Zipline Android',
  name: 'Zipline Upload Android Documentation',
  description: {
    short: 'Documentation for the Zipline Android Application.',
    long: 'Zipline Android Client Application to Upload, Share, Download and Manage Files and Short URLs for a self-hosted Diced/Zipline v4 ShareX Upload Server.',
  },
}

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  srcDir: './docs',
  // base: '/path/',
  vite: {
    server: {
      allowedHosts: true,
    },
  },

  title: settings.title,
  description: settings.description.short,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: '#344398' }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: '/images/logo-lg.png' }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: '/images/logo-lg.png' }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.title,
    logo: '/images/logo-sm.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/get-started', activeMatch: '/guides/' },
      { text: 'Docs', link: '/docs/home', activeMatch: '/docs/' },
      { text: 'Support', link: '/support' },
      {
        text: 'Links',
        items: [
          { text: 'Zipline Android GitHub', link: 'https://github.com/cssnr/zipline-android' },
          { text: 'Documentation GitHub', link: 'https://github.com/cssnr/zipline-android-docs' },
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
          { text: 'Get Started', link: '/guides/get-started' },
          { text: 'Uploading', link: '/guides/uploading' },
          { text: 'Features', link: '/guides/features' },
        ],
      },
      {
        text: 'Documentation',
        collapsed: false,
        items: [
          { text: 'Home', link: '/docs/home' },
          { text: 'Files', link: '/docs/files' },
          { text: 'User', link: '/docs/user' },
          { text: 'Settings', link: '/docs/settings' },
          { text: 'Upload', link: '/docs/upload' },
          { text: 'Widget', link: '/docs/widget' },
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
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        },
        link: 'https://cssnr.github.io/',
      },
    ],

    editLink: {
      pattern: 'https://github.com/cssnr/zipline-android-docs/blob/master/docs/:path',
      text: 'View on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
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

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    externalLinkIcon: true,
    outline: 'deep',
  },
})
