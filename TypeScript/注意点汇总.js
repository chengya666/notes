// 函数没有返回值时用void
function doSomething(callback: () => void) {
    let c = callback() // at this position, callback always returns undefined
    //c is also of type undefiend
}
// this function returns a number
function aNumberCallback(): number {
    return 2;
}
// works ? type safety is ensured in doSometing
doSomething(aNumberCallback) // aNumberCallback没有加（），就不执行，也就不会返回2


// 函数类型
// 注：函数类型是由 参数类型 和 返回值类 型组成，二者用箭头 => 隔开
callback: () => void
type vname = (baseValue: number, increment: number) => number
-------------|----------------参数类型----------------|-返回值类型-|
// 等号右边为匿名函数
let myAdd: vname = function(x: number, y: number): number { return x + y; };



// 泛型函数
// T可表示type的简称
function identity<T>(arg: T): T {
    return arg;
}
// 使用方法：2种
let output = identity<string>("myString"); // 指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()。
// 更普遍。利用了类型推论
let output = identity("myString");

// 泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

// 接口与别名
    // 泛型接口：
    interface GenericIdentityFn<T> {
        (arg: T): T; 
    }
    // 或
    interface GenericIdentityFn {
        <T>(arg: T): T; 
    }

    interface Add {
    (x:number, y:number): number
    }
    // 等价于
    type Add = (x:number, y:number) => number


    // 数组接口：
    interface ArrInter {
        0：number，
        1：number
    }
    let arr：ArrInter = [0, 1]

// ! 非空断言操作符
    （1）忽略 undefined 和 null 类型
        function myFunc(maybeString: string | undefined | null) {
            // Type 'string | null | undefined' is not assignable to type 'string'.
            // Type 'undefined' is not assignable to type 'string'. 
            const onlyString: string = maybeString; // Error
            const ignoreUndefinedAndNull: string = maybeString!; // Ok
        }
    （2）调用函数时忽略 undefined 类型
        type NumGenerator = () => number;

        function myFunc(numGenerator: NumGenerator | undefined) {
            // Object is possibly 'undefined'.(2532)
            // Cannot invoke an object which is possibly 'undefined'.(2722)
            const num1 = numGenerator(); // Error
            const num2 = numGenerator!(); //OK
        }
    注：因为 ! 非空断言操作符会从编译生成的 JavaScript 代码中移除，所以在实际使用的过程中，要特别注意。

// ?. 运算符（TypeScript 3.7 -- 可选链）
    （1）可选元素访问
        function tryGetArrayElement(arr?: T[], index: number = 0) {
            return arr?.[index];
        }
    （2）可选链与函数调用
        let result = obj.customMethod?.();

// ?? 空值合并运算符（TypeScript 3.7--当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数。）
    （1）短路
        const baz = 0 ?? 42;
        console.log(baz); // 输出：0

// ?: 可选属性（可有可无）

// 内置工具类型
    // 快速把某个接口类型中定义的属性变成‘可选’的
    （1）Partial<T>
    // 把所有的可选的属性变成‘必选’的
    （2）Required<T>