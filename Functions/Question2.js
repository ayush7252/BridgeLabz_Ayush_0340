const prompt = require ('prompt-sync')({sigint: true});

let num1 = prompt('Enter the First Number : ');
num1 = parseInt(num1);
let num2 = prompt('Enter the Second Number : ');
num2 = parseInt(num2);
let num3 = 0;

while(num1 > 0){
    let digit = num1 % 10;
    num3 = num3 * 10 + digit;
    num1 = Math.floor(num1 / 10);    
}
if(num2 === num3){
    console.log("is Palindrome"); 
}
else{
    console.log("Not a Palindrome");
    
}
