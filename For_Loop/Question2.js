const prompt = require('prompt-sync')({sigint: true});

let harmonicSum = 0;
let num = prompt('Enter the number till you want a Harmonic sum : ');

for (let i = 1; i <= num; i++) {
    harmonicSum += 1 / i;
}
console.log(harmonicSum);
