const execCommand = require('../helper/exec-command');
const helper = require('../helper');
const buildFolder = helper.getBuildRootFolder();

/**
 * Minify and copy images. Minify svgs.
 */
const commandImage = `imagemin ./src/images/* --out-dir=${buildFolder}/images -p=optipng -p=jpegtran`;
const commandSvg = `svgo -f ./src/svg --enable=removeXMLNS`;
execCommand(commandImage);
execCommand(commandSvg);