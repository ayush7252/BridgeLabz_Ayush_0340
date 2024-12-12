// 11. Calculate the average of the numbers in an array of numbers


let arr = [1,3,5,7,9,2,4,6,8,0];
function Average(){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(Average());
