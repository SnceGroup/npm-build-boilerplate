var buildFolder = require('../helper').getBuildRootFolder().replace('./', '');
var execCommand = require('../helper/exec-command');

var command = 'browser-sync start --server --ss '+ buildFolder +' --files="'+ buildFolder +'/css/*.css,'+ buildFolder +'/js/*.js,'+ buildFolder +'/*.html"';
execCommand(command);