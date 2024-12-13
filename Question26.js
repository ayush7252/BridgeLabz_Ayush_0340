// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.


let arr1 = [ 1,2,3,4,5,6,7,8,9]

let arr2 = [1,3,5,7,9]

function Result(arr1, arr2){
    let result = []
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr1.splice(i,1);
            }
        }
    }
    return arr1
}

console.log(Result(arr1, arr2));