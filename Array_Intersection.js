let arr1 = [1,3,5,7,0,1]
let arr2 = [2,4,6,7,9,1]

// let merge = []
// merge = merge.concat(arr1 , arr2)

// console.log(merge);
// let mySet = new Set(merge)

// console.log(mySet);
const len = arr1.length + arr2.length;
let merge = []

for(let i = 0; i < arr1.length; i++){
    merge.push(arr1[i]);
}
console.log(merge);
for(let i = 0; i < arr2.length; i++){
    merge.push(arr2[i]);
}
console.log(merge);

for(let i = 0;i<merge.length; i++){
    for(let j = i+1; j < merge.length; j++){
        if(merge[i] > merge[j]){
            let temp = merge[i];
            merge[i] = merge[j];
            merge[j] = temp;
        }
    }
}
console.log(merge);
let result = []
for(let i=0;i<merge.length;i++){
    if(merge[i] < merge[i+1]){
        result.push(merge[i]);
    }
}
console.log(result);




