const buildFolder = require('./script/helper').getBuildRootFolder();
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(buildFolder, 'js')
  },
  mode: 'production'
};