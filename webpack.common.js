const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
         favicon: "src/images/favicon.ico"
      }),
      new MiniCssExtractPlugin({
         filename: "assets/css/main.css"
      }),
      new CopyWebpackPlugin([{ from: "src/data", to: "assets/data" }])
   ],
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
