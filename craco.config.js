const path = require('path');

console.log(path.resolve(__dirname, `src/resource/${process.env.CLIENT}`));

module.exports = {
  webpack: {
    alias: {
      '@client': path.resolve(__dirname, `src/resource/${process.env.CLIENT}`),
    },
  },
};
