const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve("Resolved 1"), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("Rejected 2"), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve("Resolved 3"), 3000));

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  });
