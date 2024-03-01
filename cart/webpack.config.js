const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      // the name will be used from the calling app
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index.js",
      },
      // let's share the faker instead of loading twice from products
      shared: ["faker"],
      // shared: {
      //   faker: { singleton: true },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
