const prompt = require('prompt-sync')({sigint: true});

let digit = prompt('Enter the no on which you want to perform the action: ');

console.log("Please choose any one option from the below given options");
console.table([
  {option: '1', description: 'Feet to Inch '},
  {option: '2', description: 'Feet to Meter'},
  {option: '3', description: 'Inch to Feet'},
  {option: '4', description: 'Meter to Feet'},
]);

let num = prompt('Please enter a number from above options');
num = Number(num);
switch (num){
    case 1:
        var ans = digit * 12;
        console.log("answer: " + ans);
        break;
    case 2:
        var ans = digit * 0.3048;
        console.log("answer: " + ans);
        break;
    case 3:
        var ans = digit / 12;
        console.log("answer: " + ans);
        break;
    case 4:
        var ans = digit / 0.3048;
        console.log("answer: " + ans);
        break;
    default:
        console.log("Invalid option. Please try again");
}