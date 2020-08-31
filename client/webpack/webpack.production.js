const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { resolve } = require('path');

const webpackCommon = require('./webpack.common');

module.exports = () => [
  merge(webpackCommon(), {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          commons: {
            test: /[/\\]node_modules[/\\](?!(react|react-dom)).*[/\\]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: resolve(__dirname, '..', 'reports/bundle-analyzer-report.html'),
        openAnalyzer: false,
        defaultSizes: 'gzip',
      }),
    ],
  }),
];
