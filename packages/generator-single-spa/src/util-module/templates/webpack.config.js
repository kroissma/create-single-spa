const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa<% if (typescript) { %>-ts<% } %>");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "<%= orgName %>",
    projectName: "<%= projectName %>",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
