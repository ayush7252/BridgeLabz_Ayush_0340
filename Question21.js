// 21. Rotate an array to the right 1 position



let arr = [1,3,5,7,9,2,4,6,8,0]

let result = arr.slice(-1).concat(arr.slice(0,arr.length - 1))

console.log(result);