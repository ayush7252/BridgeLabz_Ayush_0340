let arr = [1,2,3,5,7,8,10,11]

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);

for(let i=0;i<arr.length-1;i++){
    if(arr[i+1] - arr[i] != 1){
        console.log(arr[i] + 1);
    }
        
}