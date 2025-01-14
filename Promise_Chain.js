function task1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 1 completed");
        resolve("Data from Task 1"); 
      }, 1000);
    });
  }
  
  function task2(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 2 completed, received:", data);
        resolve("Data from Task 2"); 
      }, 1000);
    });
  }
  
  function task3(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 3 completed, received:", data);
        resolve("Task 3 done"); 
      }, 1000);
    });
  }

  task1()
    .then((dataFromTask1) => {
      return task2(dataFromTask1);
    })
    .then((dataFromTask2) => {
      return task3(dataFromTask2); 
    })
    .then((finalData) => {
      console.log(finalData); 
    })
    .catch((error) => {
      console.error("Error in promise chain:", error); 
    });
  