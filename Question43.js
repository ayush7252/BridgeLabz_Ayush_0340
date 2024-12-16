// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let col = 1

function extractColumn(arr, colNum) {
    return arr.map(row => row[colNum]);
}

console.log(extractColumn(arr, col)); 