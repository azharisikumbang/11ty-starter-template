const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/media");

  // collections
  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/*.md").reverse();
  });

  let markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let markdownLib = new markdownIt(markdownOptions);

  //Add div around tables
  (markdownLib.renderer.rules.table_open = () =>
    '<div class="table-wrapper">\n<table>\n'),
    (markdownLib.renderer.rules.table_close = () => "</table>\n</div>"),
    eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: { input: "src", output: "_site" },
  };
};
