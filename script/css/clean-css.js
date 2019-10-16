const buildFolder = require('../helper').getBuildRootFolder();
const execCommand = require('../helper/exec-command');

const command = `cleancss -o ${buildFolder}/css/* ${buildFolder}/css/*`;
execCommand(command);