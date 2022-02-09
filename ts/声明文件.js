
// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明全局对象（含有子属性）
// interface 和 type 声明全局类型



// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型

// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// 使用了export 需要使用import引入来使用

// declare global 扩展全局变量
// declare global {
//   interface String {
//       prependHello(): string;
//   }
// }

// export {};
// 注意即使此声明文件不需要导出任何东西，仍然需要导出一个空对象，
// 用来告诉编译器这是一个模块的声明文件，而不是一个全局变量的声明文件。

// declare module 扩展原有模块

// 当书写一个全局变量的声明文件时，如果需要引用另一个库的类型，那么就必须用三斜线指令了
/// <reference /> 三斜线指令
/// <reference types="jquery" />
/// <reference path="JQuery.d.ts" />
// 其中用到了 types 和 path 两种不同的指令。
// 它们的区别是：types 用于声明对另一个库的依赖，而 path 用于声明对另一个文件的依赖。



