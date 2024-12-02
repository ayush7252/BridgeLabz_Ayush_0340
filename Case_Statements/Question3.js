const prompt = require('prompt-sync')({sigint: true});

let num = prompt('Enter the number max of 5 digits Eg:- 1, 10, 100, 1000, 10000 : ');
num = Number(num);  // it converts input into Number
switch (num) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default:
        console.log("Invalid number. Please enter a number between 1 and 10000.");            
}