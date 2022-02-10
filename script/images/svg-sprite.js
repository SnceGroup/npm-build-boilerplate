var buildFolder = require('../helper').getBuildRootFolder();
var execCommand = require('../helper/exec-command');

var command = 'svg-sprite -D "'+ buildFolder +'" -l "verbose" --svg-namespace-classnames false --svg-namespace-ids false -s --symbol-dest "sprite" --symbol-sprite "icons.svg" "./src/sprite/svg/./**/*.svg"';
execCommand(command);
