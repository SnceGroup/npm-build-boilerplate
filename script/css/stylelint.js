var execCommand = require('../helper/exec-command');

var command = 'stylefmt -r "./src/scss/**/*.scss" && stylelint "./src/scss/**/*.scss" --custom-syntax postcss-scss';
execCommand(command);