const prompt = require ('prompt-sync')({sigint: true})

"use strict";
let str = "Ayush"

console.log(str);
let ans  = ""

for(let i = str.length; i>= 0; i--){
    ans += str.charAt(i);
}
console.log(ans);
const new1 = str.split('').reverse().join('');
console.log(new1);


// let result = prompt("Enter the input :")

// console.log(result);

// Array Methods

let array = [3,6,2,7,1,8,9,5,4,7];

array.forEach((value) => console.log(value));

// Suppose we have to double the elements of the array
function double(val){
    return val * 2;
}
const doubleArray = array.map(function(val){
    return val * 3;
});

console.log(doubleArray);

// Suppose we have to find all the elements of the array which is greater than 4.

function greater(val){
    return val > 4;
}

const filteredArray = array.filter((val) => val > 8);

console.log(filteredArray);

// suppose we have to find sum of all the elements of the array .

const sum = array.reduce(function(acc, val){
    return acc + val;
},0);

console.log(sum);

// shift()
// it removes first element from the array
let result1 = array.shift();
console.log(result1);
console.log(array);

// unShift()
// it adds  at the first of the array
array.unshift(3);
console.log(array);

// concat()
// it adds two arrays together
let arr1 = [1,2,3]
let arr2 = [4,5,6]

let result2 = arr1.concat(arr2);
console.log(result2);

// join()
// it convert each element of the array to a string
let arr3 = [1,2,3,4]

let result3 = arr3.join(" ");

console.log(result3);

// reverse()

let arr4 = [1,2,3,4,5]

let result4 = arr4.reverse();

console.log(result4);

// slice()
// it prints the part of array within the given offset and last is exclusive
let arr5  = [1,2,3,4,5]
let result6 = arr5.slice(1,3)
console.log(result6);

// splice()
// it modifies the array 
let arr6 = [1,2,3,4,5]

arr6.splice(2,3,'a','b');

console.log(arr6);

// find()
// return first value if condition matched 
let arr7 = [1, 2, 3, 4];
let found = arr7.find(num => num > 2);
console.log(found);

// findIndex()
let arr8 = [1, 2, 3, 4];
let index = arr7.findIndex(num => num > 2);
console.log(index);

// from
// it conversts string into array
let arr9 = Array.from('hello')
console.log(arr9);

// sort()
let arr10 = [4, 2, 1, 3];
arr10.sort();

console.log(arr10);

// 
let arr11 = [1,2,3,4,5,6,7]

let result7 = arr11.reduce((acc, val) => {
    return val > acc ? val : acc;
}, 0);
console.log(result7);

// let result8 = Math.max(...arr11);
// let result9 = Math.min(...arr11);

for(let i = 0; i < arr11.length; i++) {
    if(arr11[i] > arr11[i+1]){
        let temp = arr11[i];
        arr11[i] = arr11[i+1];
        arr11[i+1] = temp;
    }
}
console.log(arr11[arr11.length-1]);
console.log(arr11[0]);

// sum 
let result10 = arr11.reduce((acc, val) => {
    return acc + val;
},0);
console.log(result10);

let a1 = [-1,4,6,-7,3,-4,9,5]
let ans1 = []
for(let i =0;i< a1.length;i++){
    if(a1[i] < 0){
        ans1.push(a1[i])
    }
}
console.log(ans1);



