let array = [1,2,3,4,5,4,3,3,3,3,7,8]
let mySet = new Set();
let new_array = array.sort();
for(let i = 0; i < new_array.length-1; i++){
    if(new_array[i] == new_array[i+1]){
        mySet.add(new_array[i+1]);        
    }
}
console.log(mySet);
