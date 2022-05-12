export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '天韵戏曲博客',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '黄梅戏，京剧，沪剧，昆剧，其他剧种' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/title.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 全局引入element-ui的样式
    'element-ui/lib/theme-chalk/index.css',
    // element-ui布局样式
    'element-ui/lib/theme-chalk/display.css',
    // 项目自定义全局样式
    '@/assets/css/global.css',
    // 自定义主题样式
    '@/assets/theme/index.css'
  ],

  /**
   * 需要先安装 npm i --save-dev cross-env
   */
  env: {
    // 认证客户端的URL
    authURL: process.env.NODE_ENV === 'dev' ? '//login.shun.com:7000' : '//login.xiaolingdang.net:10000'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // 引入element-ui插件
    '@/plugins/element-ui.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true,
    prefix: '/api' // 请求接口添加前缀
  },

  proxy: { // 代理转发
    '/api': {
      target: ' https://mock.mengxuegu.com/mock/6279034d94a78564b306595c/blog-web',
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 将位于node_modules目录下的element-ui导出（写正则表达式匹配）
    transpile: [/^element-ui/]
  }
}
