// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”


function isPrime (num){
    if(num <= 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;    
}
function  Rangeprime(p,n){
    let primeNumbers = [];
    let count = 0;
    let start = n+1;
    while(count < p){
        if(isPrime(start)){
            primeNumbers.push(start);
            count++;
        }
        start++;
    }
      
    return primeNumbers;
}

console.log(Rangeprime(10, 20)); 