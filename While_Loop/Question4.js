function generates(){
    return Math.floor(Math.random()*2);
}
console.log(generates());

let countW = 0;
let countL = 0;
let amount = 100;
while (amount >0 && amount < 200){
    let num = generates();
    if(num === 0){
        amount--;
        countL++;
    }else if(num === 1){
        amount++;
        countW++;
    }
}

let totalBets = countL + countW;
let won = countW;
console.log(`totalBets: ${totalBets}`);
console.log(`Number of gamblers won ${won}`);

