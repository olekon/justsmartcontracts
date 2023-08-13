const path = require("path");
/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      styles: path.join(__dirname, "src/_shared/ui/styles"),
    };
    return config;
  },
};

module.exports = nextConfig;
