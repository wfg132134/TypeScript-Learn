function hello(name:string): void {
  console.log('hello',name);
}
hello('aa')


// 定义函数的类型
type GetName = (firstName:string, lastName:string)=>string

let getName: GetName = function(firstName:string, lastName:string): string{
  return ''
}

// 定义个可选函数
function printA(name:string, age?:number):void{
  console.log(name,age);
}

printA('zs',1)

function ajax(url:string, method:string="GET"):void{
  console.log(url,method);
}
ajax("/")

// 函数的重载
let obj:any= {}; 

function attr(val:string):void
function attr(val:number):void  //声明和定义必须紧紧贴在一起
function attr(val:any):void{

}