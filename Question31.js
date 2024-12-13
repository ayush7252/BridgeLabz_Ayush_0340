// 31. Create a function that will return the number of words in a text


let str = "Hello My Name is ayush";

function FindCountLength(str){
    let count = 0
    let str2 = ""
    for(let i = 0; i < str.length;i++){
        if(str.charAt(i) !== " "){
            str2 += str.charAt(i)
        }
        else{
            count++
            str2 = ""
        }
    }
    return count + 1;
}

console.log(FindCountLength(str)); 