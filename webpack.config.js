const HtmlWebpackPlugin = require("html-webpack-plugin");

const WriteFilePlugin = require("write-file-webpack-plugin");

var path = require("path");

module.exports = {
  context: __dirname + "/src",
  devtool: "inline-source-map",
  plugins: [new WriteFilePlugin()],
  output: {
    filename: "bundle.js"
  },
  entry: {
    javascript: "./main.tsx"
  },
  mode: "production",

  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"]
      }
      // {
      //   test: /\.json$/,
      //   use: ["json-loader"]
      // }
      // {
      //   test: /\.html$/,
      //   use: "file-loader?name=[name].[ext]"
      // }
    ]
  },
  devServer: {
    port: 4000
  }
};
