// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.

function getRandomNumbers(n) {
    let arr = [];
    while(arr.length<n){
        let num = Math.floor(Math.random() * n)+1;
        if(!arr.includes(num)){
            arr.push(num);
        }
    }
    return arr;
}

console.log(getRandomNumbers(10)); 