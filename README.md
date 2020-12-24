# Glimmer.js 配合 Snowpack

这份文档记录了尝试使用 Snowpack 来搭建 Glimmer.js 项目的全部过程，每一个 commit
都是一个独立的步骤，可以按照 commit 来回溯完整的搭建过程。

## 步骤一、初始化项目

```shell
# 初始化版本控制
$ git init

# 初始化 npm 项目
$ yarn init

# 添加 snowpack 作为开发时依赖
$ yarn add --dev snowpack@next

# 生成 snowpack 的初始配置文件
$ yarn snowpack init

# 运行 snowpack 检查安装正确性
$ yarn snowpack dev

# 运行 snowpack build 测试构建
$ yarn snowpack build
```

### 为何要用 `snowpack@next`？

其实 `next` 标签安装的是 _snowpack@3.0.0_，这个版本将在 2021-01-06 发布，距离现
在也没有几天了（项目创建于 2020 年圣诞）。在 _v3_ 这个版本有一些值得尝试的新特
性，详情参见：
https://www.snowpack.dev/posts/2020-12-03-snowpack-3-release-candidate

## 步骤二、添加 Glimmer.js

> 以下软件包可以一起安装，分开写是为了方便写注释

```shell
# 安装 glimmer.js 的核心包
$ yarn add --dev @glimmerx/core @glimmerx/component

# 安装 glimmer.js 编译模板的 babel plugin
$ yarn add --dev @glimmerx/babel-plugin-component-templates

# 安装支持 class properties 的 babel plugin
$ yarn add --dev @babel/plugin-proposal-class-properties

# 安装支持 decorators 的 babel plugin
$ yarn add --dev @babel/plugin-proposal-decorators

# 安装 snowpack 的 babel plugin
$ yarn add --dev @snowpack/plugin-babel
```

随后编写一个最简单的 Glimmer Application，参见 `src` 目录下的改动。

### 关于 babel 和相关的插件

尽管 snowpack 内置了对于 JavaScript / JSX 和 TypeScript / TSX 的支持，但
Glimmer.js 的模板需要在构建时编译（不是运行时编译的），为此 Glimmer.js 提供了构
建时所用的 babel plugin，于是就需要调整 snowpack 的配置，让它把源码的编译转交给
babel 来处理。

这一步并不复杂，因为 snowpack 也提供了 babel plugin，只需要对
`snowpack.config.js` 做简单的修改即可。

值得注意的是，当 snowpack 使用了 babel plugin 之后，会自动读取默认的 babel
config 文件，也就是 `babel.config.*`，所以也可以把相关的配置选项写到此处。但本项
目为了简明扼要并没有这么做。
