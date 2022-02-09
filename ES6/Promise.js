// 1.Promise的立即执行性
  var p = new Promise(function(resolve, reject){
    console.log("create a promise");
    resolve("success");
  }); // create a promise

// 2.Promise 三种状态 pending，resolved，rejected
// 3.Promise 状态的不可逆性
// 4.链式调用