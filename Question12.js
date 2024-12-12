// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

let arr = [1,3,5,7,9,-2,-4,-6,-8]

let ans = [];
function printPositive(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log(printPositive(arr));
