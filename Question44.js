// 44. Create a function that will convert a string containing a binary number into a number

let str = "10101"

function binaryToDecimal(str) {
    return parseInt(str, 2);
}

console.log(binaryToDecimal(str)); 