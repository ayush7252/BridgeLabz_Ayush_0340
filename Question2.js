// 2. Print the odd numbers less than 100




// function printOddNumber(){
//     for(let i = 1; i <= 100; i+=2){
//         console.log(i);
//     }
// }

// printOddNumber();



function printOddNumber(){
    for(let i = 1; i <= 100; i++){
        if(i%2 !== 0){
            console.log(i);
        }
    }
}

printOddNumber();