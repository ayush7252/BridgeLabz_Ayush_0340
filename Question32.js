// 32. Create a function that will capitalize the first letter of each word in a text


let str = "my name is ayush kumar singh"
let result = str.split(" ")
console.log(result);


function ToUppercase(str){
    let result = str.split(" ")
    for(let i = 0; i < result.length; i++){
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
}

console.log(ToUppercase(str));


