require('babel-preset-latest')
require("babel-plugin-transform-object-rest-spread");
require('babel-plugin-transform-decorators-legacy');
require('babel-plugin-transform-object-entries');
require('babel-plugin-object-values-to-object-keys');
require('babel-plugin-add-module-exports');
require('babel-plugin-transform-async-to-generator');

const baseCompile = require('../../internal/babelBaseCompiler');

const compiledFileTypes = ['js', 'jsx', 'ts'];

const compile = (files, distPath) => {
  return baseCompile(files, distPath, __dirname, compiledFileTypes);
}

export default {compile};