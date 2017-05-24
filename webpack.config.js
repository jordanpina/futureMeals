const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('client/public/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /scss$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  }
}
