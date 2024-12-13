// 37. Create a function that will convert a string in an array containing the ASCII codes of each character

let str = "Ayush"

function convertStringToArray(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str.charCodeAt(i));
    }
    return arr;
}

console.log(convertStringToArray(str)); 