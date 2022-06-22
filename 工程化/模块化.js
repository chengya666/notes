commonjs
// node就是使用的commonjs规范
// exports 与 module.exports
// 实际上是
var exports = module.exports

module.exports.x = 代码
exports.x = 代码

const target = (exports.x = 代码)


// 使用或引用
const accept = require('文件路径')
或
const { x } = require('文件路径')
