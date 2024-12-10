// Min And Max in a given array
let arr11 = [1,2,3,4,5,6,7]

let result7 = arr11.reduce((acc, val) => {
    return val > acc ? val : acc;
}, 0);
console.log(result7);

let result8 = Math.max(...arr11);
let result9 = Math.min(...arr11);

for(let i = 0; i < arr11.length; i++) {
    if(arr11[i] > arr11[i+1]){
        let temp = arr11[i];
        arr11[i] = arr11[i+1];
        arr11[i+1] = temp;
    }
}
console.log(arr11[arr11.length-1]);
console.log(arr11[0]);