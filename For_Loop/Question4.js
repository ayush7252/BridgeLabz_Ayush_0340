const prompt = require('prompt-sync')({sigint: true});

let num = prompt('Enter the range of the digits: ');

for(let i=0;i< num ; i++){
    if(i<=1){
        continue;
    }
    let isPrime = true;
    for(let j = 2;j<= Math.sqrt(i);j++){
        if(i%j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
    }
    
}