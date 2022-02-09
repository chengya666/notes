// 取整
const result = num | 0

// 判断奇偶
const result = num & 1 === 1 ? '奇数' : '偶数'



// 删除数组，负数右移0，结果为特别大的数字，>=0的右移0，结果为数字本身
// 如：
-1 >>> 0 // 4294967295
1 >>> 0 // 1
// 如果splice第一个参数为-1，则结果会删除数组的最后一项，使用>>>0则会解决
handlers.splice(handlers.indexOf(handler) >>> 0, 1);

// 二分查找取中间项
const middle = (start + end) >>> 1

// 正数变成负数，或者负数变成正数(变换符号只需要取反后加1即可)
const result = -13
const result1 = ~result + 1

// Patch flags can be combined using the | bitwise operator and can be checked
// using the & operator, e.g.
// 组合：  const flag = TEXT | CLASS 
// 校验： if (flag & TEXT) { ... }


