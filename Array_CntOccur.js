let array = [1,2,3,4,6,2,4,8,5,9,1,6]
let arr = array.sort();

let myMap = new Map();

for(let i=0; i<arr.length; i++){
    if(myMap.has(arr[i])){
        myMap.set(arr[i], myMap.get(arr[i])+1);
    } else {
        myMap.set(arr[i], 1);
    }
}
console.log(myMap);
