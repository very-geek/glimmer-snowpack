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
