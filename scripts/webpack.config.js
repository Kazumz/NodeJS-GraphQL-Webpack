const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  devtool: 'inline-source-map',
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.mjs', '.js', '.tsx', '.ts' ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
};