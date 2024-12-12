// 17. Calculate the sum of digits of a positive integer number


let num = 2345;
function DigitSum(num){
    let sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(DigitSum(num));