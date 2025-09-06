import { defineConfig } from 'vitepress'

const settings = {
  title: 'Zipline Android',
  name: 'Zipline Upload Android Application',
  description: {
    short: 'Zipline Upload Android Client Application for a Diced/Zipline self-hosted ShareX Server.',
    long: 'Zipline Android Client Application to Upload, Share, Download and Manage Files and Short URLs for a self-hosted Diced/Zipline v4 ShareX Upload Server. Native Kotlin Android Application with a Mobile First Design. Includes a Stats Widget with Upload Shortcuts.',
  },
  image: '/images/logo.png',
  color: '#344398',
  docs_repo: 'https://github.com/cssnr/zipline-android-docs',
  source_repo: 'https://github.com/cssnr/zipline-android',
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
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: settings.image }],

    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: '#344398' }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: settings.image }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: settings.image }],
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
      { text: 'Support', link: '/support', activeMatch: '^/(support|faq)/?' },
      {
        text: 'Links',
        items: [
          { text: 'Zipline Android GitHub', link: settings.source_repo },
          { text: 'Documentation GitHub', link: settings.docs_repo },
          { text: 'Diced/Zipline GitHub', link: 'https://github.com/diced/zipline' },
          { text: 'Browser Addon', link: 'https://github.com/cssnr/zipline-extension' },
          { text: 'Developer Site', link: 'https://cssnr.github.io/' },
          { text: 'Contribute', link: 'https://ko-fi.com/cssnr' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: settings.source_repo },
      { icon: 'vitepress', link: settings.docs_repo },
      { icon: 'googlechrome', link: 'https://github.com/cssnr/zipline-extension' },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
      { icon: 'kofi', link: 'https://ko-fi.com/cssnr' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        },
        link: 'https://cssnr.github.io/',
      },
    ],

    sidebar: [
      {
        text: 'Guides',
        base: '/guides',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Uploading', link: '/uploading' },
          { text: 'Features', link: '/features' },
        ],
      },
      {
        text: 'Documentation',
        base: '/docs',
        collapsed: false,
        items: [
          { text: 'Home', link: '/home' },
          { text: 'Files', link: '/files' },
          { text: 'User', link: '/user' },
          { text: 'Settings', link: '/settings' },
          { text: 'Upload', link: '/upload' },
          { text: 'Widget', link: '/widget' },
        ],
      },
      {
        text: 'Support',
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Get Help', link: '/support' },
        ],
      },
    ],

    editLink: {
      pattern: `${settings.docs_repo}/blob/master/docs/:path`,
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
      // provider: 'local',
      provider: 'algolia',
      options: {
        appId: '1661VTCE0H',
        apiKey: 'ddc74a0231783c222ada099a107d68ad',
        indexName: 'zipline-android-docs',
      },
    },

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    externalLinkIcon: true,
    outline: 'deep',
  },
})
