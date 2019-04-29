const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "app",
      template: "./index.html"
    })
  ],
  entry: {
    javascript: "./main.js"
  },
  mode: "development",

  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"]
      }
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