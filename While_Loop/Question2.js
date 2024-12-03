const prompt = require('prompt-sync')({sigint: true});
let low = 1;
let high = 100;
let guess;
let response;

while(low <= high){
    guess = Math.floor((low + high) /2);

    response = prompt(`Is your number less than, greater than, or equal to ${guess}? (Enter 'less', 'greater', or 'equal'): `).toLowerCase();

    if(response === 'equal'){
        console.log("Yeh! You got this");
        break;
    }
    else if(response === 'less'){
        high = guess-1;
    }
    else if(response === 'greater'){
        low = guess+1;
    }
    else{
        console.log("Invalid input! please re-enter ")
    }

}
 