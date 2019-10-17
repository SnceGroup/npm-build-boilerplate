const buildFolder = require('../helper').getBuildRootFolder();
const execCommand = require('../helper/exec-command');

const command = `browser-sync start --https --server --ss "${buildFolder}" --files "${buildFolder}/css/*.css, ${buildFolder}/js/*.js, ${buildFolder}/*.html"`;
execCommand(command);