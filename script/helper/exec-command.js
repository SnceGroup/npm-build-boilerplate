const execSync = require('child_process').execSync;
const path = require('path');

const SEPARATOR = process.platform === 'win32' ? ';' : ':';
const env = Object.assign({}, process.env);
env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;

/**
 * Execute a command
 * Reference: https://www.nczonline.net/blog/2016/03/mimicking-npm-script-in-node-js/
 * @param {String} command The command to execute.
 */
module.exports = command => {
  const output = execSync(command, {
    cwd: process.cwd(),
    env: env,
    shell: true,
    stdio: 'inherit'
  });
}
