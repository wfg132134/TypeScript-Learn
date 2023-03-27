let a: boolean = true

let age: number = 1

let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3]; //两种方式定义是等价的

// 元组类型， 数量和类型已知的数组
let demo: [string, number] = ['1', 2];

enum Gender {
  GIRL,
  BOY
}

console.log(Gender.BOY);

// 常量枚举
const enum Colors {
  RED, YELLOW, GREEN
}

let mycolor = [Colors.RED, Colors.YELLOW, Colors.GREEN]
console.log(mycolor);

// 任意类型
// any 类型不进行类型检查，跟js一样
// let root: any = document.getElementById("id");
// root.style.color = 'red'

// strictNullChecks =true ，则不能把null undefine赋值给x

let x: number;
x = 1;
// x = undefined;
// x = null;


let y: number | null | undefined;
y = 1;
y = undefined;
y = null;

// nerver 代表不会出现的值
// 1.作为不会返回的函数值类型

// 使用场景
function error(message: string): never {
  throw new Error('报错了')
}

function loop(): never {
  while (true) {

  }
}

function fn(x: number | string) {
  if (typeof x === 'number') {

  } else if (typeof x === 'string') {

  } else {
    console.log(x); // 此时x的类型是nerver类型
  }
}

// void 代表没有任何类型
// strictNullChecks为false 不能赋值给null
function greeting(): void {
  return undefined;
}

// void 类型可以被赋值为null 和 undefined, 而never不呢赋值给任何类型，要么报错，要么死循环.
// void 函数能正常执行， 但是返回never不能正常执行

// Symbol，代表独一无二的值

const s1 = Symbol('key')

// 类型推导
let uname;
uname = 1;
uname = 'zs';
uname = null;

// 包装类型
let isOk1: boolean = Boolean(1);

// 类型断言
let name4: string | number;
// console.log((name4! as number).toFixed(2));

// 双重断言
console.log((name4! as any as boolean));

// 字面量类型和类型字面量
const up: 'Up' = 'Up';
const down: 'Down' = 'Down';

type Direction = 'Up' | 'Down';
function move(direction: Direction) {

}
move('Up'); // 可实现类似枚举功能

// 类型字面量
type Person = {
  name: string,
  age: number
}

let p1: Person = {
  name: '1',
  age: 2
}

// 字符串字面量和联合类型
type T = '1' | '2' | '3';
type T2 = string | number | boolean;