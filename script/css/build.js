const helper = require('../helper');
const buildFolder = helper.getBuildRootFolder();
const isProduction = helper.isProductionBuild();
const execCommand = require('../helper/exec-command');

let command = `postcss 'src/css/*.css' --dir '${buildFolder}/css'`;

if(isProduction) {
  command = `${command} && npm run clean-css && npm run format:css`;
}

execCommand(command);