process.cwd()
// 当前工作目录
// cwd: Current working directory

// node引入方式两种
// 1.require方式
// const path = require('path')
// 也可解构：
// const { join, resolve, extname } = require('path')
// 2.import方式
// import {resolve,....xxxx} from 'path'

// __dirname、__filename、 process.cwd() 这三个都是绝对路径
// __dirname、__filename这两者默认是node内置变量，分别是当前文件所在目录的路径、当前文件所在的文件路径

// path.join()
// 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。

// path.resolve([from ...], to)
// 将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 
// 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。

// path.relative(from, to)
// 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。

// path.dirname(p)
// 返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。

// path.extname(p)
// 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。

// graceful-fs是fs的替代品

// fs的替代品，包含了graceful-fs，并添加了一些额外的文件系统方法，并支持Promise
// fs-extra

// execa
// 调用shell和本地外部程序的javascript封装
execa(file, [arguments], [options])

// .nvmrc

// .npmrc
