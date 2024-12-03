const prompt = require('prompt-sync')({sigint: true})

function degF(degree){
    if(degree> 0 && degree < 100){
        console.log(degree*9/5+32);   
    }
    else{
        console.log("Invalid Input! Limt Reached");    
    }
}

function degC(degree){
    if(degree> 32 && degree < 212){
        console.log(degree-32*5/9);   
    }
    else{
        console.log("Invalid Input! Limit Reached");  
    }
}
console.table([
    {option: '1', description: 'convert celcius to farenheit'},
    {option: '2', description: 'convert farenheit to celcius'},
  ]);
let num = prompt('Choose from Above options...: ');
num = Number(num);

let degree = prompt('Enter the number of degrees: ');

switch(num){
    case 1: degF(degree);
        break;
    case 2: degC(degree);
        break;
    default:console.log("Invalid Input");
}