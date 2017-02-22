var settings = require('../../settings.json');

/**
 * Get the root build folder by checking the NODE_ENV variable
 *
 * @returns {String} The root folder for the build
 */
var getBuildRootFolder = function() {
  if(process.env.NODE_ENV && process.env.NODE_ENV === 'prod') {
    return settings.build.prodDir;
  }
  
  return settings.build.devDir;
};

module.exports = {
  getBuildRootFolder: getBuildRootFolder,
}
