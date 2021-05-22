const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = async () => ({
  entry: path.resolve(__dirname, './src/index.jsx'),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.resolve(__dirname, './public/')],
    contentBasePublicPath: [''],
    watchContentBase: true,
    historyApiFallback: true,
    openPage: '',
    host: 'localhost',
    port: 8080,
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: './js/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new webpack.EnvironmentPlugin(), new ReactRefreshWebpackPlugin()],
});
