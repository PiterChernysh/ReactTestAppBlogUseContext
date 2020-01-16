const path = require("path");
const webpack = require('webpack');
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const env = process.env.NODE_ENV || "development";
const isDev = env === "development";

module.exports = {
  entry: "./dev/script.js",
  output: {
    path: path.resolve(__dirname, "site"),
    filename: "bundle.[chunkhash].js"
  },
  mode: env,
  devServer: {
    contentBase: path.join(__dirname, "site"),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name]-[hash].[ext]"
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]"
              }
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "svg-react-loader"]
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: "style.[chunkhash].css"
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      __DEV__: isDev
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve("./dev/static"),
    //     to: path.resolve("./site")
    //   }
    // ])
    new HtmlWebpackPlugin({
      inject: false,
      template: "./dev/template/index.html",
      filename: "index.html"
    })
  ]
};
