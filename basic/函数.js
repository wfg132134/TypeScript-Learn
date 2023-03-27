function hello(name) {
    console.log('hello', name);
}
hello('aa');
var getName = function (firstName, lastName) {
    return '';
};
// 定义个可选函数
function printA(name, age) {
    console.log(name, age);
}
printA('zs', 1);
function ajax(url, method) {
    if (method === void 0) { method = "GET"; }
    console.log(url, method);
}
ajax("/");
// 函数的重载
var obj = {};
function attr(val) {
}
