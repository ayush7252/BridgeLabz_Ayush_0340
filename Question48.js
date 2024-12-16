// 48. Create a function to return the longest word in a string


let str = "My name is Ayushh Kumar Singh And I Am From bengal"
function longestWord(str) {
    let words = str.split(" ");
    let longest = '';
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > longest.length) {
            longest = words[i];
        }

    }
    return longest;
}

console.log(longestWord(str)); 
