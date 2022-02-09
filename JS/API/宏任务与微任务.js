/**
 * 宏任务与微任务
 * 1.宏任务：计时器、ajax、读取文件
 * 2.微任务：promise.then
 * 3.执行顺序：
 *  （1）同步程序
 *  （2）process.nextTick
 *  （3）微任务
 *  （4）宏任务
 *  （5）setImmediate
 */

    console.log('123');

    setTimeout(() => {
      console.log('setTimeout-1000')
    }, 1000)
    setTimeout(() => {
      console.log('setTimeout-500')
    }, 500)
    setTimeout(() => {
      console.log('setTimeout-0')
    }, 0)

    new Promise((resolve) => {
      console.log('promise')
      resolve()
    })
      .then(() => {
        console.log('then1')
      })
    // 此API在node环境中可使用
    process.nextTick(() => {
      console.log('tick');
    })

  /**
   * 输出顺序：
        123
        promise
        tick
        then1
        setTimeout-0
        setTimeout-500
        setTimeout-1000
   */


