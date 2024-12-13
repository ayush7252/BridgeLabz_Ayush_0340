// 29. Print the distance between the first 100 prime numbers


let arr = []

function isPrime(num){
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
let num = 1
while (arr.length < 100){
    if(isPrime(num)){
        arr.push(num);
    }
    num++;
}
// console.log(arr);

let result = [];
for(let i = 0; i < arr.length-1; i++){
    result.push(arr[i+1]-arr[i]);
}
console.log(result);

