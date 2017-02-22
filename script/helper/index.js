var settings = require('../../settings.json');

/**
 * Returns true if the build is running in production mode
 *
 * @returns {Boolean} True if production mode is enabled
 */
var isProductionBuild = function() {
  if(process.env.NODE_ENV && process.env.NODE_ENV === 'prod') {
    return true;
  }
  
  return false;
};

/**
 * Get the root build folder by checking the NODE_ENV variable
 *
 * @returns {String} The root folder for the build
 */
var getBuildRootFolder = function() {
  if(isProductionBuild()) {
    return settings.build.prodDir;
  }
  
  return settings.build.devDir;
};

module.exports = {
  isProductionBuild: isProductionBuild,
  getBuildRootFolder: getBuildRootFolder
}
