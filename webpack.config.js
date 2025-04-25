const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/scripts/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "_site/scripts"),
  },
  watch: true,
};
