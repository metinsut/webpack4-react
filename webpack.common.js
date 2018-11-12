const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
   context: path.resolve(__dirname, ""),
   entry: {
      app: "./src/index.js"
   },
   output: {
      filename: "assets/js/[name].js",
      path: path.resolve(__dirname, "build")
   },
   plugins: [
      new CleanWebpackPlugin(["build"]),
      new HtmlWebpackPlugin({
         template: "src/index.html",
         favicon: "src/images/favicon.ico",
         minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
         },
         chunksSortMode: "dependency"
      }),
      new MiniCssExtractPlugin({
         filename: "assets/css/main.css"
      })
   ],
   devServer: {
      contentBase: path.join(__dirname, "build"),
      compress: true,
      port: 3000
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
         },
         {
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
         },
         {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: [
               {
                  loader: "file-loader",
                  options: {
                     name: "[path][name].[ext]",
                     context: "src/images",
                     outputPath: "../build/assets/images",
                     publicPath: "../images"
                  }
               }
            ]
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
               {
                  loader: "file-loader",
                  options: {
                     name: "[name].[ext]",
                     //BUILD PATH
                     outputPath: "../build/assets/fonts",
                     //SRC PATH
                     publicPath: "../fonts"
                  }
               }
            ]
         }
      ]
   }
};
