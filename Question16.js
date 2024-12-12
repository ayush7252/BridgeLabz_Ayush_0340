// 16. Create a function that will return a Boolean specifying if a number is prime


let num = 13;
function isPrime(num){
    if(num <= 2){
        return false;
    }
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
const prime = isPrime(6);
console.log(prime);
