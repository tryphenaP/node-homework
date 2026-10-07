const os = require('os');
const path = require('path');
const fs = require('fs');

const sampleFilesDir = path.join(__dirname, 'sample-files');

if (!fs.existsSync(sampleFilesDir)) {
  fs.mkdirSync(sampleFilesDir, { recursive: true });
}

// OS module
console.log('Platform:', os.platform());
console.log('CPU:', os.cpus()[0].model);
console.log('Total Memory:', os.totalmem());

// Path module
const joinedPath = path.join(
  __dirname,
  'sample-files',
  'folder',
  'file.txt'
);

console.log('Joined path:', joinedPath);

// fs.promises API and streams
async function runDemo() {
  try {
    const demoFilePath = path.join(sampleFilesDir, 'demo.txt');

    await fs.promises.writeFile(
      demoFilePath,
      'Hello from fs.promises!'
    );

    const data = await fs.promises.readFile(demoFilePath, 'utf8');
    console.log('fs.promises read:', data);

    // Create a large file with 100 lines
    const largeFilePath = path.join(
      sampleFilesDir,
      'largefile.txt'
    );

    const lines = Array.from(
      { length: 100 },
      (_, index) => `This is line ${index + 1} in a large file.`
    ).join('\n');

    await fs.promises.writeFile(largeFilePath, lines);

    // Read the large file using a readable stream
    const readStream = fs.createReadStream(largeFilePath, {
      encoding: 'utf8',
      highWaterMark: 1024
    });

    for await (const chunk of readStream) {
      console.log('Read chunk:', chunk.slice(0, 40));
    }

    console.log('Finished reading large file with streams.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

runDemo();