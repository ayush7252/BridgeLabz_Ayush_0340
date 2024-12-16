// 45. Create a function to calculate the sum of all the numbers in a jagged array
let jaggedArray = [
    [1, 2, 3],
    [4, 5],       
    [6, 7, 8, 9]
];

function sumOfJaggedArray1(jaggedArray) {
    let sum = 0;
    for (let i = 0; i < jaggedArray.length; i++) {
        for (let j = 0; j < jaggedArray[i].length; j++) {
            sum += jaggedArray[i][j];
        }
    }
    return sum;
}

console.log(sumOfJaggedArray1(jaggedArray));

function sumOfJaggedArray(jaggedArray) {
    return jaggedArray.flat(Infinity).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfJaggedArray(jaggedArray));

