const prompt = require('prompt-sync')({sigint: true});

let num = prompt('Enter the number: ');

for (let i = 0; i <= num; i++) {
    console.log(Math.pow(2, i));
}