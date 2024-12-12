// 20. Rotate an array to the left 1 position


let arr = [1,3,5,7,9,2,4,6,8,0]

let result = arr.slice(1).concat(arr.slice(0, 1));

console.log(result);