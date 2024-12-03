const prompt = require('prompt-sync')({sigint: true})

let num = prompt('Enter the number');
let digit =0;
while (digit <= num){
    let ans = Math.pow(2, digit);
    if(ans <= 256){
        console.log(ans);
        digit++;
    }
    else{
        console.log("Limit reached");
        break;
    }
}