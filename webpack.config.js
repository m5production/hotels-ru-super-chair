const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports ={
  mode: 'development',
  target: 'web',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2*|ttf|eot|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: path.join('assets', 'fonts', '[name][ext]')
        }
      },
      {
        test: /\.(svg|jpg|png)$/i,
        type: 'asset/resource',
        generator: {
          filename: path.join('assets', 'img', '[name][ext]')
        }
      },
    ]
  }
}