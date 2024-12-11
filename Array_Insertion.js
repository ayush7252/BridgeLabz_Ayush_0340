let arr = [1,3,5,7,9]
// using push method
arr.push(10);
console.log(arr); 

// using unshift method
// it adds element at the front of the array
arr.unshift(0);
console.log(arr);

// using splice method
arr.splice(3,0,3,5,6)
console.log(arr);

// using concat method
let newArr = arr.concat(20)
console.log(newArr);

// using spread operator
let newArr1 = [...newArr , 30]
console.log(newArr1);

// using from method

let newArr2 = Array.from(newArr1.concat(40))
console.log(newArr2);

