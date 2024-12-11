let arr = [1,3,5,7,9,2,4,6,8,0]

// using find   ie. it return first occured element in the array

console.log(arr.find(num => num > 5));


// using indexOf  ie. it returns the index of the elemrnt

console.log(arr.indexOf(5));


// using includes    ie. it returns a boolean value 

console.log(arr.includes(5));


// using findIndex

console.log(arr.findIndex((elem) => elem > 5));


// using for loop

for(let i=0; i<arr.length; i++){
    if(arr[i] === 5){
        console.log(i);
        break;
    }
}

// using some

let result = arr.some(num => num === 5);
console.log(result);
