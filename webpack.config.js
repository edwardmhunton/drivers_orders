const WriteFilePlugin = require("write-file-webpack-plugin");

var path = require("path");

module.exports = {
  entry: {
    javascript: "./main.tsx"
  },
  devtool: "inline-source-map",
  context: __dirname + "/src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [new WriteFilePlugin()],

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
