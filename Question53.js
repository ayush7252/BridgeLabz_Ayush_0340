// 53. Calculate 70! with high precision (all digits)

function factorial(n){
    let result = 1n;
    for(let i = n; i > 1; i--){
        result *= BigInt(i);
    }
    return result;
}

console.log(factorial(70));