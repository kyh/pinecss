/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
const mdx = require("./config/mdx");

module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "api/_build",
  ignoredRouteFiles: [".*"],
  mdx: mdx,
};
