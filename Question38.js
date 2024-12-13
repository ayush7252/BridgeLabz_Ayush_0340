// 38. Create a function that will convert an array containing ASCII codes in a string


let arr = [65, 121, 117, 115, 104]; 
function convertAsciiToString(arr) {
    return String.fromCharCode(...arr);
}
console.log(convertAsciiToString(arr));
