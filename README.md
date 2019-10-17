# npm build boilerplate
Opinionated npm build configuration for building static websites.

## Requirements

 - [Node.js](https://nodejs.org) (tested with v10.15.3)

## Installation

 - Download the project zip or clone the repository.
 - Install dependencies: `npm install`.

## Commands
Available commands to execute with `npm run <command>`.

### Build

| Command | Tasks | Notes |
| --- | --- | --- |
| build:css:dev | postcss, autoprefixer | CSS not minified. |
| build:css:prod | postcss, autoprefixer, clean-css | CSS minified. |
| build:html:dev | twig | |
| build:html:prod | twig | |
| build:images:dev | imagemin, svgo | |
| build:images:prod | imagemin, svgo | |
| build:js:dev | webpack | |
| build:js:prod | webpack | |
| build:dev | rimraf, build:images:dev, build:css:dev, build:js:dev, build:html:dev | Clean build dev folder and run all dev build tasks. |
| build:prod | rimraf, build:images:prod, build:css:prod, build:js:prod, build:html:prod | Clean build prod folder and run all prod build tasks. |

### Watch

| Command | Tasks | Notes |
| --- | --- | --- |
| watch:js | webpack | Run webpack in watch mode. |
| watch | browser-sync, watch:css, watch:html | Run Browsersync on port 3000. Watch for scss and twig files changes and run relative build dev tasks. |