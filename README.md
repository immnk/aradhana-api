# Aradhana API

[![Build Status](https://travis-ci.org/immnk/aradhana-api.svg?branch=master)](https://travis-ci.org/immnk/aradhana-api) [![Dependencies](https://david-dm.org/immnk/aradhana-api.svg)](https://david-dm.org/) [![CodeFactor](https://www.codefactor.io/repository/github/immnk/aradhana-api/badge)](https://www.codefactor.io/repository/github/immnk/aradhana-api) [![Coverage Status](https://coveralls.io/repos/github/immnk/aradhana-api/badge.svg?branch=master)](https://coveralls.io/github/immnk/aradhana-api?branch=master) [![Tests Status](https://img.shields.io/badge/tests-not%20covered-yellow.svg)](https://github.com/immnk/aradhana-api/issues/)

> Aradhana API is the backend system that provides API for [Aradhana App on Play Store](https://play.google.com/store/apps/details?id=com.creatuslabs.aradhana). This project when committed or merged to master branch will deploy to Firebase automatically using Travis CI [![Build Status](https://travis-ci.org/immnk/aradhana-api.svg?branch=master)](https://travis-ci.org/immnk/aradhana-api)

## Table of contents

1. [Set up](#set-up)
2. [Test](#test)
3. [Tasks](#tasks)
4. [Useful websites](#useful-websites)
5. [VS Code Plugins Recommended](#vs-code-plugins-recommended)
6. [LICENSE](#license)

## Set up

Follow the following steps:

1. `git clone https://github.com/immnk/aradhana-api.git`
2. `cd aradhana-api/functions && npm install && cd ..`
3. Pre-requsite to run before project
   `npm install -g firebase-tools`
   `firebase login`
4. Run `firebase serve --only functions,hosting`

## Test

1. Open webpack_testing folder where the code is cloned.
2. Open command prompt at the folder and run `npm test`

## Tasks

All tasks and issues are listed as items in [Tasks & issues in repository Issues tab](https://github.com/immnk/webpack-testing/issues)

- [x] Write a README file.
- [x] Add CI/CD pipelines
- [x] Create index page to add rows to database automatically
- [ ] Create SCSS and compile them with webpack
- [ ] Make automatic deployments on release branch
- [ ] Create unit test cases with Mocha(JS test framework) and Chai(assertion library)
- [ ] Create Swagger documentation. [Swagger](https://dev.to/akshendra/generating-documentation-on-the-fly-in-express-2652)
- [ ] Use `react` to create UI using [Material UI](https://github.com/mui-org/material-ui)

## VS Code Plugins Recommended

- Debugger for Chrome
- ESLint
- GitLens
- IntelliSense for CSS class names
- markdownlint
- vscode-icons
- Prettier
- [Swagger Generator](https://marketplace.visualstudio.com/items?itemName=dwarfpenguin.swagger-generator&ssr=false#overview)

## Useful websites

1. [Mock data](https://www.mockaroo.com/)
2. [Background generator](https://cssgradient.io/gradient-backgrounds/)
3. [Markdown tricks](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## License

[MIT License](https://github.com/immnk/aradhana-api/blob/master/LICENSE)
