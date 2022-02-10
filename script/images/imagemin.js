var execCommand = require('../helper/exec-command');
var helper = require('../helper');
var buildFolder = helper.getBuildRootFolder();

/**
 * minify and copy images
 */
  var command = 'imagemin ./src/images/* --out-dir='+ buildFolder +'/images -p=pngquant -p=jpegtran -p=gifsicle -p=svgo';
  execCommand(command);