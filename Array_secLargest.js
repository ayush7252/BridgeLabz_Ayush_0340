let arr = [1,2,6,5,4,8,9]

for(let i=0;i<arr.length;i++){
    for(let j=0;i<arr.length-1-i;i++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr[arr.length-2]);

