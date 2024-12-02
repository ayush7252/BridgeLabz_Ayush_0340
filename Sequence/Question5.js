// a. Convert 42 inches to feet
function inchesToFeet(inches) {
    return inches / 12;
  }
  
  let inches = 42;
  let feet = inchesToFeet(inches);
  console.log(`${inches} inches = ${feet} feet`);
  
  // b. Convert rectangular plot dimensions from feet to meters
  function feetToMeters(feet) {
    return feet * 0.3048;
  }
  
  let lengthInFeet = 60;
  let widthInFeet = 40;
  
  let lengthInMeters = feetToMeters(lengthInFeet);
  let widthInMeters = feetToMeters(widthInFeet);
  
  console.log(`Rectangular plot dimensions in meters: ${lengthInFeet} feet x ${widthInFeet} feet = ${lengthInMeters.toFixed(3)} meters x ${widthInMeters.toFixed(3)} meters`);

// c. area of 25 such plots

function squareMeterToAcer(squareMeters) {
    return squareMeters/4046.86;
}

let areaOfOnePlotInMeters = lengthInMeters * widthInMeters;
let totalAreaInMeters = areaOfOnePlotInMeters*25;

let totalAreaInAcres = squareMeterToAcer(totalAreaInMeters);


console.log(`Total area of 25 succh plots in acres: ${totalAreaInAcres.toFixed(3)} acres`);