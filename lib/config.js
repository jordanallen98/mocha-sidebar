'use strict';

const vscode = require('vscode');
const path = require('path');
const getConfiguration = () => vscode.workspace.getConfiguration('mocha');

exports.mochaNodeModulesPath = ()=>getConfiguration().path;
exports.mochaPath = () => {
  let mochaPath = getConfiguration().path;
  if (mochaPath) {
    if (!path.isAbsolute(mochaPath)) {
      mochaPath = path.join(vscode.workspace.rootPath, mochaPath);
    }

    return path.join(mochaPath, 'index.js');
  }
  else {
    return 'mocha';
  }
}
exports.env = () => getConfiguration().env;
exports.logVerbose = () => getConfiguration().logVerbose;
exports.runTestsOnSave = () => getConfiguration().runTestsOnSave;
exports.options = () => getConfiguration().options;
exports.node_options = () => getConfiguration().node_options;
exports.files = () => getConfiguration().files;
exports.parallelTests = () => getConfiguration().parallelTests;
exports.subdirectory = () => getConfiguration().subdirectory;
exports.setSubdirectory = (subdirectory)=>getConfiguration().update('subdirectory',subdirectory);
exports.requires = () => {
  const files = getConfiguration().requires || [];
  if (!Array.isArray(files))
    throw new Error("mocha.requires configuration must be an array of files");
  return files.map(s => s.toString());
};
exports.sideBarOptions = () => getConfiguration().sideBarOptions;
exports.coverage = () => getConfiguration().coverage
exports.coverageReporters = () => getConfiguration().coverage.reporters
exports.showErrorPopup = () => getConfiguration().showErrorPopup;
