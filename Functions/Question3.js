const prompt = require('prompt-sync')({sigint: true})

function ispalindrome(number){
    let num1 = number;
    let num3 = 0;
    while(num1 > 0){
        let digit = num1 % 10;
        num3 = num3 * 10 + digit;
        num1 = Math.floor(num1 / 10);    
    }
    return num3;
}

function isPrime(number){
    if(number <= 1) return false;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}

let num1 = prompt('Please enter a number: ');
if(isPrime(num1)){
    let palindrome = ispalindrome(num1);
    if(isPrime(palindrome)){
        console.log('The given number is a prime number and its palindrome is also a prime number.');
    } else {
        console.log('The given number is a prime number but its palindrome is not a prime number.');
    }
}
else{
    console.log('The given number is not a prime number.');
}