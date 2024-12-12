// 4. Print all the multiplication tables with numbers from 1 to 10


function table(val){
    for(let i = 1;i<=10;i++){
        let ans = val * i;
        console.log(`${val} * ${i} = ${ans}`);
        
    }
}

table(5)