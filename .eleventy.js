import markdownIt from "markdown-it";
import markdownItKatex from "markdown-it-katex";

export default function (eleventyConfig) {


  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(markdownItKatex);

  eleventyConfig.setLibrary("md", md);

  // Make KaTeX CSS available (copy from node_modules to your output)
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "assets/katex.min.css",
  });

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "src/_includes",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}