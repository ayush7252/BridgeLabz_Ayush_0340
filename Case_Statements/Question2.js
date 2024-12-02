const prompt = require('prompt-sync')({sigint: true});

function RandomGenerate() {
    // return Math.floor(Math.random() * 6) + 1;
    
    return userInput = prompt("Enter a number: ");
    
}

let num =RandomGenerate();
num = Number(num);

switch (num) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thrusday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;    
}
