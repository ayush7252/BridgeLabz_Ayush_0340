// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both


let arr1 = [1,5,3,8,10]
let arr2 = [3,4,1,10,9,0]

function ResultArray(arr1, arr2) {
    let result = []
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] !== arr2[j]){
                continue
            }
            result.push(arr1[i])
        }
    }
    return result;

}
let data = arr1.concat(arr2);
function Final(data , next){
    for(let i = 0;i<next.length;i++){
        for(let j = 0;j<data.length;j++){
            if(next[i] == data[j]){
                data.splice(j, 1)
            }
        }
    }
}
let arr3 = ResultArray(arr1, arr2) 

Final(data, arr3)
console.log(data)





