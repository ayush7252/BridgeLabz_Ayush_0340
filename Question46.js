// 46. Find the maximum number in a jagged array of numbers or array of numbers

let jaggedArray = [
    [1, 2, 3],
    [4, 5],       
    [6, 7, 8, 9]
];

function findMaxNumber(jaggedArray) {
    let ans = Math.max(...jaggedArray.flat(Infinity));
    return ans;
}

console.log(findMaxNumber(jaggedArray))