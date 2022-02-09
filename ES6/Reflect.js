// 老写法
'assign' in Object // true
// 新写法
Reflect.has(Object, 'assign') // true

Reflect.ownKeys (target)
// Reflect.ownKeys方法用于返回对象的所有属性


// 老写法
Function.prototype.apply.call(Math.floor, undefined, [1.75]) // 1
// 新写法
Reflect.apply(Math.floor, undefined, [1.75]) // 1

var myObject = {
  foo: 1
}
Reflect.get(myObject, 'foo') // 1
Reflect.set(myObject, 'foo', 2);


// 如果name属性部署了读取函数（getter），则读取函数的this绑定receiver。
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
};

var myReceiverObject = {
  foo: 4,
  bar: 4,
};

Reflect.get(myObject, 'baz', myReceiverObject) // 8


// Reflect.deleteProperty方法等同于delete obj[name]，用于删除对象的属性。
const myObj = { foo: 'bar' };
// 旧写法
delete myObj.foo;
// 新写法
Reflect.deleteProperty(myObj, 'foo');
// 该方法返回一个布尔值。如果删除成功，或者被删除的属性不存在，返回true；删除失败，被删除的属性依然存在，返回false。



// Reflect.defineProperty(）无法定义时， 不会抛出错误，而是返回false， 可以省掉 `try catch`,
// 通过Reflect调用的方法第一个参数均是对象
// 不可构造，不能使用 new 进行调用
// 所有的方法都是静态方法，类似于 Math
