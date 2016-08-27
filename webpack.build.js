var config = require('./webpack.config.js')

config.entry = {
  "vendor": "./components/index.js"
}

config.output = {
  filename: './dist/[name].js',
  library: 'SdjVue',
  libraryTarget: 'umd'
}

module.exports = config;
