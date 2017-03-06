# npm build boilerplate
Opinionated npm build configuration for building static websites.

## Requirements

 - [Node.js](https://nodejs.org) (tested with v7.5.0)
 - [Yarn](https://yarnpkg.com) (tested with v0.19.1)

## Installation

 - Download the project zip or clone the repository.
 - Install dependencies: `yarn install`.

## Commands
Available commands to execute with `npm run <command>`.

### Build

| Command | Tasks | Notes |
| --- | --- | --- |
| build:css:dev | stylefmt, stylelint, scss, autoprefixer | CSS not minified. Source comments available. |
| build:css:prod | stylefmt, stylelint, scss, autoprefixer, clean-css | CSS minified. |
| build:html:dev | twig | |
| build:html:prod | twig | |
| build:images:dev | svg-sprite | Images are not minified. Folder is symlinked to build dev folder. |
| build:images:prod | imagemin, svg-sprite | |
| build:js:dev | webpack | |
| build:js:prod | webpack | |
| build:dev | rimraf, build:images:dev, build:css:dev, build:js:dev, build:html:dev | Clean build dev folder and run all dev build tasks. |
| build:prod | rimraf, build:images:prod, build:css:prod, build:js:prod, build:html:prod | Clean build prod folder and run all prod build tasks. |

### Watch

| Command | Tasks | Notes |
| --- | --- | --- |
| watch:js | webpack | Run webpack in watch mode. |
| watch | browser-sync, build:css:dev, build:html:dev | Run Browsersync on port 3000. Watch for scss and twig files changes and run relative build dev tasks. |