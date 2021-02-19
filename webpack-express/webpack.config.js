const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry: {
    common: './client/common',
    pageOne: './client/pages/pageOne.js',
    pageTwo: './client/pages/pageTwo.js'
  },

  externals: {
    jquery: 'jQuery',
  },

  output: {
    path: path.resolve(__dirname, 'public')
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({ filename:'styles.css' })
  ],

  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, 'client/pages')],
      loader: 'babel-loader'
    }, {
      test: /.(sa|sc|c)ss$/,

      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',

        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',

        options: {
          sourceMap: true
        }
      }]
    }, {
      // For webpack v5
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      // More information here https://webpack.js.org/guides/asset-modules/
      type: "asset",
    }]
  },

  devServer: {
    open: true,
    proxy: {
      '/': `http://localhost:${3001}`,
      '/socket.io': {
        target: `http://localhost:${3001}`,
        ws: true,
      },
    },
  }
}
