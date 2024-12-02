const prompt = require('prompt-sync')({sigint: true})

let Month = prompt('Please enter a month: ');
let Day = prompt('Please enter a day: ');
if(Day > 31 || Month > 12){
    return false;
}
else if((Month == 3 && Day >=20) || (Month == 6 && Day <= 20) || (Month >3 && Month < 6)){
    console.log("true");
}
else {
    console.log("false");
}