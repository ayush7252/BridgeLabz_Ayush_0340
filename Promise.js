let myPromise = new Promise(function(resolve, reject) {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed!");
    }
  }, 2000);
});

myPromise
  .then(function(result) {
    console.log(result);  // "The operation was successful!"
    return "Passing value to next step";  // Returning a value to the next .then()
  })
  .then(function(newResult) {
    console.log(newResult);  // "Passing value to next step"
  })
  .catch(function(error) {
    console.log(error);  // This will only run if any promise is rejected
  });
