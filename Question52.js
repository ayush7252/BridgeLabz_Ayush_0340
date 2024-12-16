//  52. Calculate Fibonacci(500) with high precision (all digits)

function Fibonacci(num){
    let fib = [0n, 1n];
    for(let i = 2; i <= num; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num];
}

let result = Fibonacci(500);

console.log(result); 