// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements+99


let arr = [1,3,5,7,9,1,2,3,4,5,6,7,8,9]

let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

