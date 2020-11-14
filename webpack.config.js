/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|otf|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.less', '.json'],
    alias: {
      '@modules': path.resolve(__dirname, 'client/modules'),
      '@UI': path.resolve(__dirname, 'client/UI'),
      '@services': path.resolve(__dirname, 'client/services'),
      '@static': path.resolve(__dirname, 'client/static'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
      favicon: './public/favicon_io/favicon.ico',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: `${__dirname}/dist-client`,
    host: '0.0.0.0',
    port: 9000,
    hot: true,
  },
};
