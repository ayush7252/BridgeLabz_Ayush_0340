let arr = [1,3,5,7,9,2,4,6,8,0]

// using sort method

arr.sort((a, b) => a-b);
console.log(arr);


// using bubble sort

function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i<len; i++){
        for(let j = 0; j<len-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));

