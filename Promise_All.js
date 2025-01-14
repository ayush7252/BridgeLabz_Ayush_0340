const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve("First resolved"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second resolved"), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Third resolved"), 3000));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.log(error);
  });
