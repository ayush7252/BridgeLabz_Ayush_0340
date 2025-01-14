const util = require('util');

function readFile(filename, callback) {
    setTimeout(() => {
      if (filename === 'valid.txt') {
        callback(null, 'File content');
      } else {
        callback('File not found');
      }
    }, 1000);
  }
  

// function promisifiedReadFile(filename) {
//     return new Promise((resolve, reject) => {
//       readFile(filename, (err, result) => {
//         if (err) {
//           reject(err); // Reject the promise if there’s an error
//         } else {
//           resolve(result); // Resolve the promise with the result
//         }
//       });
//     });
//   }

  
//   // Using the promisified function
//   promisifiedReadFile('valid.txt')
//     .then((content) => {
//       console.log(content); // 'File content'
//     })
//     .catch((error) => {
//       console.error(error); // If an error occurs
//     });


// Assume readFile is a callback-based function
const readFilePromise = util.promisify(readFile);

// Using the promisified function
readFilePromise('valid.txt')
  .then((content) => {
    console.log(content); // 'File content'
  })
  .catch((error) => {
    console.error(error); // 'File not found'
  });




  