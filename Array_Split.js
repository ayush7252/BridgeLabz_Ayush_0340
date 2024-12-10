// let arr = [1,2,3,4,5,6,7,8,9]
let arr = [5,1,3]

// const ans = arr.reduce((acc, val) => acc + val,0)

// console.log(ans)
// if(ans%2 != 0){
//     console.log("The split is possible")
// }
// else{
//     console.log("The split is not possible");
// }

let largest = 0
let secLagest = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        secLagest = largest
        largest = arr[i]
    }
    else if(arr[i] > secLagest && arr[i] !== largest){
        secLagest = arr[i]
    }
}
console.log(secLagest);


