const fs = require('fs');
const path = require('path');

const sampleDir = path.join(__dirname, 'sample-files');
const sampleFile = path.join(sampleDir, 'sample.txt');

// Create the folder and file programmatically
fs.mkdirSync(sampleDir, { recursive: true });
fs.writeFileSync(sampleFile, 'Hello, async world!');

// 1. Callback pattern
fs.readFile(sampleFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Callback error:', err.message);
    return;
  }

  console.log('Callback:', data);
});

// Callback hell happens when callbacks are nested inside one another:
//
// fs.readFile('file1.txt', 'utf8', (err, data1) => {
//   fs.readFile('file2.txt', 'utf8', (err, data2) => {
//     fs.readFile('file3.txt', 'utf8', (err, data3) => {
//       console.log(data1, data2, data3);
//     });
//   });
// });
//
// Deeply nested callbacks can make code difficult to read and maintain.

// 2. Promise pattern
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise(sampleFile)
  .then((data) => {
    console.log('Promise:', data);
  })
  .catch((err) => {
    console.error('Promise error:', err.message);
  });

// 3. Async/await pattern
async function readWithAsyncAwait() {
  try {
    const data = await readFilePromise(sampleFile);
    console.log('Async/await:', data);
  } catch (err) {
    console.error('Async/await error:', err.message);
  }
}

readWithAsyncAwait();