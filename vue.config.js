// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/],
  configureWebpack: {
    devtool: "source-map",
  }
};
