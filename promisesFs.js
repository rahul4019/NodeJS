import * as fs from 'node:fs/promises';

//* promises api has elimated the problem of callback hell
// safe for production
async function createFile(pathName) {
  try {
    /* using await doesn't block the main thread (code gets suspended whenever await gets encountered) */
    await fs.writeFile(pathName, 'Hello, This is Rahul.\n');
    await fs.appendFile(pathName, 'Appended Text\n');
  } catch (error) {
    console.error('error: ', error);
  }

  console.log('File written!');
}

createFile('hello.txt');
