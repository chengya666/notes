// 1.async/await的用处就是：用同步方式，执行异步操作

// （1）非Promise对象（不按顺序执行）
async function test() {
  await setTimeout(() => { console.log(1) }, 3000)
  console.log(11)
  await setTimeout(() => { console.log(2) }, 2000)
  console.log(22)
} // 11 22 2 1

// （2）Promise对象（按顺序执行）
const n1 = await new Promise((r) => {
  r(1)
})
console.log(11)
console.log(n1, 'n1')
const n2 = await new Promise((r) => {
  r(2)
})
console.log(n2, 'n2')
console.log(22)
// 11 1 n1 2 n2 22

// （3）若后边还有异步的或定时器但没await则继续按异步的执行

// 注：await后面一定要跟Promise对象，才会按队列顺序执行（只针对当前await后边的），否则不会
