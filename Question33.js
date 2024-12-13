let str = "1,2,3,4,5";

function calculateSum(str) {
    let arr = str.split(",");
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    
    return sum;
}

console.log(calculateSum(str));
