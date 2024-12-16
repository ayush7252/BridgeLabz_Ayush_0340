// 51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.

let str = "ayushkumarsingh"

let result = [];
let mymap = new Map();

function findLetter(str){
    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if(char >= 'a' && char <= 'z'){
            if(mymap.has(char)){
                mymap.set(char, mymap.get(char) + 1);
            } else {
                mymap.set(char, 1);
            }
        }
    }
    for(let [key, value] of mymap.entries()){
        result.push([key, value]);
    }
}

findLetter(str);

console.log(result); 
