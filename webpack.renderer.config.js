const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
   test: /\.svg$/,
    use: { loader: 'svg-url-loader' },
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.svg'],
  }
};
