function generates(){
    return Math.random();
}

let countH = 0;
let countT = 0;
while (countH < 11 && countT < 11 ){
    let num = generates();

    if(num < 0.5){
        countH++;
    }else{
        countT++;
    }
}
if(countH === 11){
    console.log("Head Won");
}
else if(countT === 11){
    console.log("Tails Won");
    
}
