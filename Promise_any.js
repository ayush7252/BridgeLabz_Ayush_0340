const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve("Promise 1 resolved"), 2000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 2 rejected"), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve("Promise 3 resolved"), 1500));

Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
