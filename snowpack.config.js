// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
  buildOptions: {
    // 构建输出到 `dist` 目录
    out: "dist",
  },
  devOptions: {
    port: 4000,
  },
  mount: {
    // `public` 目录映射到应用程序根路径
    public: "/",
    // `src` 目录映射到应用程序 `/assets` 路径
    src: "/assets",
  },
  // plugins: [],
  // installOptions: {},
};
