const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonPaths = require('./paths');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpack = require('webpack');
module.exports = {
  mode: 'production',
  output: {
    filename: `${commonPaths.jsFolder}/[name].[hash].js`,
    path: commonPaths.outputPath,
    publicPath: commonPaths.publicPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: false,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.outputPath.split('/').pop()], {
      root: commonPaths.root
    }),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].css`,
      chunkFilename: '[id].css'
    }),
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': `"${'/UIColorPicker'}"`
    })
  ],
  devtool: 'source-map'
};
