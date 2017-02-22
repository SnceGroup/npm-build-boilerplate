var execCommand = require('../helper/exec-command');
var helper = require('../helper');
var symlinkOrCopySync = require('symlink-or-copy').sync;
var buildFolder = helper.getBuildRootFolder();
var isProduction = helper.isProductionBuild();

/**
 * Prod: minify and copy images
 * Dev: symlink images folder, or copy images if symlink is not available
 */
if(isProduction) {
  var command = 'imagemin ./src/images/* --out-dir='+ buildFolder +'/images -p=pngquant -p=jpegtran -p=gifsicle -p=svgo';
  execCommand(command);
}
else {
  helper.createBuildRootFolderIfNotAvailable();
  symlinkOrCopySync('src/images', buildFolder + '/images');
}