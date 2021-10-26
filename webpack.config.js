const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  //-->   set mode
  mode: 'development',

  //-->   set port for development
  devServer: {
    port: 3000,
  },

  //-->  allow source map
  devtool: 'source-map',

  //-->  set entry point
  entry: './src/pages/index.js',

  //-->  set output path
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  //-->  main module setting and loaders
  module: {
    rules: [
      //-->  js loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      //-->  css laoder
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      //-->   sass loader
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
            },
          },
        ],
      },
      //-->  set svg asset tye
      {
        test: /\.svg$/i,
        type: 'asset',
      },
      //--> set type for image an jpeg
      {
        test: /\.png|jpe?g|gif/i,
        type: 'asset',
      },
    ],
  },

  //-->  all plugins
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
