module.exports = {
  layout: "post",
  tags: ["post"],
  eleventyComputed: {
    // Strip date prefix: "2023-01-29-safety-shield" → "/posts/safety-shield/"
    permalink: (data) => `/posts/${data.page.fileSlug}/`,
  },
};
