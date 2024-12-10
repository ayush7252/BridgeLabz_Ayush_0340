// make seperate array for negative values
let a1 = [-1,4,6,-7,3,-4,9,5]
let ans1 = []
let ans2 = []
for(let i =0;i< a1.length;i++){
    if(a1[i] < 0){
        ans1.push(a1[i])
    }
    if(a1[i] > 0){
        ans2.push(a1[i])
    }
}
console.log(ans1);
console.log(ans2);
