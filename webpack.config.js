const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

var path = require("path");

module.exports = {
  devtool: "inline-source-map",
  context: __dirname + "/src",
  entry: "./main.tsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./index.html",
      title: "Orkestro",
      inject: false
    })
  ],

  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"]
      }
    ]
  },
  devServer: {
    port: 4000
  }
};
