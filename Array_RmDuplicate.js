let array = [1,2,7,8,9,10,11,3,2,6,1];
let array2 = []
for(let i=0;i<array.length ;i++) {
    for(let j=0;j<array.length -1-i;j++){
        if(array[j] > array[j+1]){
            let temp = array[j]
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}
console.log(array);

for(let i=0;i<array.length;i++) {
    let isDuplicates = false
   for(let j = 0;j < array2.length;j++){
    if(array[i]===array2[j]){
        isDuplicates = true
        break;
    }
}
if(!isDuplicates){
    array2.push(array[i])
}
}
console.log(array2);
