// 28. Calculate the sum of first 100 prime numbers and return them in an array


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
console.log(arr);

let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

console.log(`sum: ${sum}`);

let ans = arr.reduce((acc, val) =>{
    acc += val;
    return acc;
},0)
console.log(ans);

