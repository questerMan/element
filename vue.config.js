const { defineConfig } = require('@vue/cli-service');
// const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, 'src'))
  //     .set('@element', path.resolve(__dirname, 'src/components/element'))
  // }
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element'
      }
    }
  }
});
