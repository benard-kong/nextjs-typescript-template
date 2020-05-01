// Source: https://github.com/zeit/next.js/tree/master/examples/with-jest

module.exports = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    return "cssTransform";
  },
};
