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
  //, "ts-loader"
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "bundle.css"
            }
          },
          { loader: "extract-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 4000
  }
};
