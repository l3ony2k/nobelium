const BLOG = {
  title: 'Wonder Space',
  author: 'L3ON',
  email: 'wonderboy0609@outlook.com',
  link: 'https://blog.l3on.site',
  description: '不可勝在己，可勝在敵',
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#000000', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2020, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-image-l3on.vercel.app', // The link to generate OG image, don't end with a slash
  socialLink: 'https://www.instagram.com/wonderboy0609/',
  seo: {
    keywords: ['Blog', 'Website', 'Notion', '个人博客', '博客'],
    googleSiteVerification: '6YxPdXNLSGTsJtcMDwh2RdmRPmPD9GUW85vLmgSYczQ' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-3RY39TS8R3' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'nobelium', // The repository of store comments
      owner: 'LeonWong0609',
      admin: ['LeonWong0609'],
      clientID: 'e0ecd2171bdaf45ccb2b',
      clientSecret: '8eb0098f7c8314578b720f97bcafddc0a31b8dee',
      distractionFreeMode: true
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '180db6ba-df4f-4d7f-a50d-15150caf6b8c', // data-app-id
      host: 'https://cusdis.l3on.site', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.l3on.site/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
