// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
  buildOptions: {
    // 构建输出到 `dist` 目录
    out: "dist",
    sourceMaps: true,
  },
  devOptions: {
    port: 4000,
  },
  // 这是一个隐性依赖，项目并不会安装 @glimmer/core 而是安装 @glimmerx/core，但
  // 运行时会报错，所以我们让 snowpack 负责安装这个依赖
  install: ["@glimmer/core"],
  mount: {
    // `public` 目录映射到应用程序根路径
    public: "/",
    // `src` 目录映射到应用程序 `/assets` 路径
    src: "/assets",
  },
  plugins: [
    [
      "@snowpack/plugin-babel",
      {
        input: [".js", ".jsx", ".mjs", ".ts", ".tsx"],
      },
    ],
    "@snowpack/plugin-typescript",
  ],
};
