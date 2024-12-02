const prompt = require('prompt-sync')({sigint:true});

let num =  prompt("Enter the number of which you want factorial : ");
num = Number(num);
let sum = 1
num = Number(num);
for(let i =num;i> 0;i--){
    sum *= i;
}
console.log(sum);
