const config = require('../../config.json');
const fs = require('fs');

/**
 * Returns true if the build is running in production mode
 * @returns {Boolean} true if production mode is enabled
 */
const isProductionBuild = () => process.env.NODE_ENV && process.env.NODE_ENV === 'prod';

/**
 * Get the root build folder by checking the NODE_ENV variable
 * @returns {String} The root folder for the build
 */
const getBuildRootFolder = () => isProductionBuild() ? config.build.prodDir : config.build.devDir;

/**
 * Create the build folder if it doesn't exist
 */
const createBuildRootFolderIfNotAvailable = () => {
  const buildFolder = getBuildRootFolder();

  if (!fs.existsSync(buildFolder)) {
    fs.mkdirSync(buildFolder);
  }
};

module.exports = {
  isProductionBuild,
  getBuildRootFolder,
  createBuildRootFolderIfNotAvailable
}
