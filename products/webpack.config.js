const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      // the name will be used from the calling app
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/bootstrap.js",
      },
      // let's share the faker instead of loading twice from cart
      shared: ['faker'],
      // shared: {
      //   faker: { singleton: true },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
