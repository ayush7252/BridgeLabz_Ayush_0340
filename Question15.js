// 15. Create a function that will find the nth Fibonacci number using recursion


function Fibonacci(num) {
    if (num === 0) {
        return 0; 
    }
    if (num === 1) {
        return 1;  
    }
    return Fibonacci(num - 1) + Fibonacci(num - 2);
}

console.log(Fibonacci(10));