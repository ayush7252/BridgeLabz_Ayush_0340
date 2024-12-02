const prompt = require('prompt-sync')({sigint: true});

let num = prompt("Enter the number of which you want factor : ");

for(let i=0;i < num ;i++){
    if(num%i == 0){
        console.log(i);
        if (i !== num / i) {
            console.log(num / i); 
        }

    }
}
