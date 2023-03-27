var a = true;
var age = 1;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3]; //两种方式定义是等价的
// 元组类型， 数量和类型已知的数组
var demo = ['1', 2];
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender.BOY);
var mycolor = [0 /* Colors.RED */, 1 /* Colors.YELLOW */, 2 /* Colors.GREEN */];
console.log(mycolor);
// 任意类型
// any 类型不进行类型检查，跟js一样
// let root: any = document.getElementById("id");
// root.style.color = 'red'
// strictNullChecks =true ，则不能把null undefine赋值给x
var x;
x = 1;
// x = undefined;
// x = null;
var y;
y = 1;
y = undefined;
y = null;
// nerver 代表不会出现的值
// 1.作为不会返回的函数值类型
// 使用场景
function error(message) {
    throw new Error('报错了');
}
function loop() {
    while (true) {
    }
}
function fn(x) {
    if (typeof x === 'number') {
    }
    else if (typeof x === 'string') {
    }
    else {
        console.log(x); // 此时x的类型是nerver类型
    }
}
// void 代表没有任何类型
// strictNullChecks为false 不能赋值给null
function greeting() {
    return undefined;
}
// void 类型可以被赋值为null 和 undefined, 而never不呢赋值给任何类型，要么报错，要么死循环.
// void 函数能正常执行， 但是返回never不能正常执行
// Symbol，代表独一无二的值
var s1 = Symbol('key');
// 类型推导
var uname;
uname = 1;
uname = 'zs';
uname = null;
// 包装类型
var isOk1 = Boolean(1);
// 类型断言
var name4;
// console.log((name4! as number).toFixed(2));
// 双重断言
console.log(name4);
// 字面量类型和类型字面量
var up = 'Up';
var down = 'Down';
function move(direction) {
}
move('Up'); // 可实现类似枚举功能
var p1 = {
    name: '1',
    age: 2
};
