const prompt = require('prompt-sync')({sigint:true})

let num = prompt("Enter the numbermax of 5 digits Eg:- 1, 10, 100, 1000, 10000 : ");

if(num == 1){
    console.log("unit");
}
else if(num == 10){
    console.log("ten");
}
else if(num == 100){
    console.log("Hundred");
}
else if(num == 1000){
    console.log("Thousand");
}
else if(num == 10000){
    console.log("Ten Thousand");    
}