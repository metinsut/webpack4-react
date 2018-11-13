const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
   mode: "production",
   devtool: "source-map",
   plugins: [
      new OptimizeCssAssetsPlugin(),
      new HtmlWebpackPlugin({
         template: "src/index.html",
         favicon: "src/images/favicon.ico",
         minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
         }
      })
   ]
});
