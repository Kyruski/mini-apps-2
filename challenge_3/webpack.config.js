const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/public')
  },
  module: {
    rules: [
      {
        test: /\jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}