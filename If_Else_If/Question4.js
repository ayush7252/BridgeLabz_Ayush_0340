let a = 10;
let b = 20;
let c = 30;

let arr = [];

let num1 = a + b * c ;
arr.push(num1);
let num2 = c + a / b;
arr.push(num2);
let num3 = a % b + c;
arr.push(num3);
let num4 =  a * b + c
arr.push(num4);

let min = Math.min(...arr);
let max = Math.max(...arr);
console.log(min);
console.log(max);

console.log();

