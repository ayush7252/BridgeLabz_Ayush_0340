const prompt = require ('prompt-sync')({sigint: true})

let year = prompt("Enter the year : ");

if ((year%4 == 0 && year%100 != 0 )||( year%400 == 0)) {
    console.log(`the ${year} is leap year`);
}
else{
    console.log(`the ${year} is Not a leep year`);
    
}