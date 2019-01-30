'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: { // dev 环境

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {//配置本地代理
        '/api': {
          target:'http://hngxkapi.wsglw.net',
          changeOrigin:true,
          pathRewrite:{
              '^/api': ''
          }
       }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: { // production 环境
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),//编译输入的 index.html文件

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),//编译输出的 静态资源路径
    assetsSubDirectory: 'static',//编译输出的二级目录
    assetsPublicPath: './',//编译发布的根目录，可配置为资源服务器域名或 CDN域名

    /**
     * Source Maps
     */

    productionSourceMap: true,  //是否开启 cssSourceMap
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,//是否开启gzip
    productionGzipExtensions: ['js', 'css'],//需要使用 gzip 压缩的文件扩展名

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
