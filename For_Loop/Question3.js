const prompt = require('prompt-sync')({sigint:true});
let isPrime = false
let num = prompt("Enter the number : " );
num = Number(num);

for(let i = 0;i<Math.sqrt(num); i++){
    if(num%i == 0){
        isPrime = false
        break;
    }
}
if(isPrime){
console.log('It is prime');
}
else{
    console.log("Not a prime Number");  
}