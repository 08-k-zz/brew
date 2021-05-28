const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.common')({
  mode: 'development',
  entry: [require.resolve('react-app-polyfill/ie11'), path.join(process.cwd(), 'src/app.js')],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      favicon: 'src/images/favicon.ico',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false,
    }),
  ],
  devtool: 'eval-source-map',
  performance: {
    hints: false,
  },
});
