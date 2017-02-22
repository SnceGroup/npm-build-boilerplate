var isProduction = require('../helper').isProductionBuild();
var execCommand = require('../helper/exec-command');

var command = 'npm run scss && npm run autoprefixer';
execCommand(command);