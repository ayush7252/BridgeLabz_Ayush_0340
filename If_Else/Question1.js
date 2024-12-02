function RandomGenerate() {
    return Math.floor(Math.random()*900) + 100;
}

let randomArr = [];
let maxValue = 5;

for(let i=0;i<maxValue;i++) {
    let randomNumber = RandomGenerate();
    randomArr.push(randomNumber);
    console.log(`Random number ${i+1}: ${randomNumber}`);
}

let min = Math.min(...randomArr);      // spread Operator
let max = Math.max(...randomArr);      // spread Operator
console.log(min);
console.log(max);

