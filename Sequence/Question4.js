function randomGenerator(){
    return Math.floor(Math.random() * 90)+10;
}
 let sum = 0;
 let maxValue = 5;

 for(let i = 0; i < maxValue; i++) {
    let currentNumber = randomGenerator();
    console.log(`Number ${i+1}: ${currentNumber}`);
    sum += currentNumber;
 }
 console.log(`Total sum: ${sum}`);

 let average = sum / maxValue;
 console.log(`Average sum: ${average}`);
 
 