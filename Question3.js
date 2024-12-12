// 3. Print the multiplication table with 7


function tableOfSeven(){
    for(let i = 1; i <= 70; i++){
        if(i % 7 === 0){
            console.log(i);
        }
    }
}

tableOfSeven();