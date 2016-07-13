var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './public/app/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'//服务器路径
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.DefinePlugin({  
        __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    })
  ],
  eslint: {
    configFile: '.eslintrc'
  },
  /**
   * If need eslint, add it in loaders.
   * {test: /\.js$/,loader: "eslint-loader",exclude: /node_modules/,}
   */
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'public/app')
    },{
        test: /\.less$/,
        loader: "style!css!less"
    },{
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    },
    {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}]
  }
};
