const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Watch for changes in layout/include files
  eleventyConfig.addWatchTarget("./_11ty/");

  // Date filters
  eleventyConfig.addFilter("dateDisplay", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("MMM dd, yyyy").toUpperCase()
  );
  eleventyConfig.addFilter("dateISO", (date) =>
    DateTime.fromJSDate(date, { zone: "utc" }).toISO()
  );
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Truncate filter (like Jekyll's truncate)
  eleventyConfig.addFilter("truncate", (str, length) => {
    if (!str) return "";
    const plain = str.replace(/<[^>]+>/g, "");
    return plain.length > length ? plain.slice(0, length) + "..." : plain;
  });

  // Shim for Jekyll's {% link %} tag — converts _posts/YYYY-MM-DD-slug.md to /slug/
  eleventyConfig.addLiquidTag("link", function () {
    return {
      parse(tagToken) { this.target = tagToken.args.trim(); },
      render() {
        const slug = this.target
          .replace(/^_posts\/\d{4}-\d{2}-\d{2}-/, "/")
          .replace(/\.md$/, "/");
        return Promise.resolve(slug);
      },
    };
  });

  return {
    dir: {
      input: ".",
      output: "_site_11ty",
      layouts: "_11ty/_layouts",
      includes: "_11ty/_includes",
      data: "_data",
    },
    // Use Liquid as the template language (same as Jekyll)
    templateFormats: ["html", "md", "liquid"],
    markdownTemplateEngine: false, // posts use Jekyll-specific tags; process front matter only
    htmlTemplateEngine: "liquid",
    // Exclude Jekyll-specific dirs from Eleventy processing
    pathPrefix: "/",
  };
};
