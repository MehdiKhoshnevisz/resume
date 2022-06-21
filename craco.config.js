const path = require("path");

module.exports = {
  webpack: {
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
