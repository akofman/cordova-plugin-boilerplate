
module.exports = {
  target: 'node',
  entry: './scripts/src/',
  output: {
    path: './scripts',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ 'es2015' ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  }
};
