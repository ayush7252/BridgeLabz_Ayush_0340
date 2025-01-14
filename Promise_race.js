const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 4000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 1500));

Promise.race([promise1, promise2, promise3])
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.log(error);
  });
