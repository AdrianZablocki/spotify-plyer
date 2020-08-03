const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const browserslistUserAgent = require('browserslist-useragent-regexp');

const polyfills = require('../polyfills');
const { version } = require('../package.json');

const { PUBLIC_URL, API_BASE_URL } = process.env;
const templateParameters = {
  title: 'Spotify player',
  appVersion: version,
  publicUrl: PUBLIC_URL,
  supportedBrowsers: browserslistUserAgent.getUserAgentRegExp({
    allowHigherVersions: true,
  }),
  variables: {
    endpoint: API_BASE_URL,
  },
  cache: false,
  polyfills: polyfills.join('%2C'),
  minify: {
    removeAttributeQuotes: true,
    html5: true,
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
};

module.exports = () => ({
  entry: [resolve(__dirname, '..', 'src/index.ts')],
  context: resolve(__dirname, '..'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    publicPath: `${PUBLIC_URL}/`,
    ecmaVersion: 5,
  },
  plugins: [
    new HTMLWebpackPlugin({
      ...templateParameters,
      template: resolve(__dirname, '..', 'src/index.hbs'),
      inject: 'head',
    }),
    new Dotenv({
      systemvars: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/u,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(hbs|html)$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              partialDirs: [resolve(__dirname, '../src'), resolve(__dirname, '../node_modules')],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: resolve(__dirname, '..', 'media'),
              name: '[name].[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
});
