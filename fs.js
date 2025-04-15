import * as fs from 'node:fs';

function createFile(pathName) {
  //* Synchronous APIs (not recommended in the produciton)

  //   fs.writeFileSync(pathName, 'Hello! this is rahul.'); // overrides the file
  //   fs.appendFileSync(pathName, '\nAppended Text'); // appends to the exisiting content

  //* Asynchronous APIs (Node.js creates separate threads to perform these file operations)

  fs.writeFile(pathName, 'Hello! This is rahul\n')

  console.log('File has been created!');
}

createFile('./hello.txt');
