import * as fs from 'node:fs';

function createFile(pathName) {
  //* Synchronous APIs (not recommended in the produciton)

  //   fs.writeFileSync(pathName, 'Hello! this is rahul.'); // overrides the file
  //   fs.appendFileSync(pathName, '\nAppended Text'); // appends to the exisiting content

  //* Asynchronous APIs (Node.js creates separate threads to perform these file operations)

  fs.writeFile(pathName, 'Hello! This is rahul\n', (error) => {
    if (error) {
      console.log('Something went wrong, while creating file.');
      return;
    }

    fs.appendFile(pathName, 'Appended Text\n', (error) => {
      if (error) {
        console.log('Something went wrong, while appending text to file.');
        return;
      }
      console.log('File has been appended asynchronously!');
    });
    
    console.log('File has been created asynchronously!');
  }); //* Error first callback */

  console.log('File operation done!');
}

createFile('./hello.txt');
