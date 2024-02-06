'use strict'
const path = require('path');
const app = require('./app');
const env = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const ownPackage = {
  resolve: {
    alias: {
      'ciheul-js': `/${env.parsed.PACKAGE_URL}`,
      'ciheul-js-resources': `/${env.parsed.PACKAGE_URL}/core/resources/js/`,
    }
  }
}

const content = {
  mode: 'development',
  entry: { },
  watch: true,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../src/assets/dist/')
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  "node_modules",
                  `${env.parsed.PACKAGE_URL}/core/resources/scss/`
                ]
              }
            }
          }
        ]
      }
    ]
  },
  ...ownPackage
}

content.entry = {...app[0], ...app[1], ...app[2]};
module.exports = content;