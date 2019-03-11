module.exports = {
  entry: './client/app.jsx',
  output: {
    filename: 'index.js',
    path: `${__dirname}/public`
  },
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '*', '.js', '.jsx']
  }
}