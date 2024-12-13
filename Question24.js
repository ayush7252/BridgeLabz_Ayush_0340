// 24. Create a function that will merge two arrays and return the result as a new array


let arr1 = [1,3,5,7,9]

let arr2 = [2,4,6,8,10]

function MergeArr(arr1, arr2) {
    return [...arr1,...arr2]
}

console.log(MergeArr(arr1, arr2));