/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "functions/[[path]].js",
  publicPath: "/build/",
  server: "./server.js",
  serverConditions: ["worker"],
};