// https://segmentfault.com/a/1190000013514680

// 指定待编译文件有两种方式：
// 1.使用 files 属性
// 2.使用 include 和 exclude 属性

// exclude 只对 include 有效，对 files 无效。即 files 指定的文件如果同时被 exclude 排除，那么该文件仍然会被编译器引入。


// 类型相关的选项包括 typeRoots 和 types 。
// 两个选项只对通过 npm 安装的声明模块有效，用户自定义的类型声明文件与它们没有任何关系

// typeRoots 用来指定默认的类型声明文件查找路径，默认为 node_modules/@types 。
// 如果不希望自动引入 typeRoots 指定路径下的所有声明模块，那可以使用 types 指定自动引入哪些模块。

{
  "compilerOptions": {
    "types" : ["node", "lodash", "express"]
  }
}

// 只会引入 node 、 lodash 和 express 三个声明模块，其它的声明模块则不会被自动引入。

// baseUrl、paths
"baseUrl": ".", // This must be specified if "paths" is.
"paths": {
  "jquery": ["node_modules/jquery/dist/jquery"] // 此处映射是相对于"baseUrl"
}

// typescript中的路径别名
// 注：paths路径映射类似于ts的路径别名


