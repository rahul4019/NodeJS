import * as fs from 'node:fs/promises';

async function deleteFolder(folderPath) {
  await fs.rm(folderPath, { recursive: true });
}
async function deleteFile(filePath) {
  await fs.unlink(filePath);
}

async function readFile(pathName) {
  const data = await fs.readFile(pathName, 'utf-8');
  console.log(data);
}

async function createFolder(folderName) {
  await fs.mkdir(folderName, { recursive: true });
}

async function writeFile(pathName, content = '') {
  await fs.appendFile(pathName, content);
}

async function createFile(pathName, content = '') {
  await fs.writeFile(pathName, content);
}

async function getFileInfo(pathName) {
  const stats = await fs.stat(pathName);
  return {
    size: `${(stats.size / 1024).toFixed(2)} KB`,
    created: stats.birthtime.toLocaleString(),
    modified: stats.mtime.toLocaleString(),
  };
}

createFolder('./content/images/logos');
createFile('./hello.txt', 'Hello NodeJS');
// readFile('./hello.txt');
// deleteFile('./hello.txt');

// deleteFolder('./content/images/logos');
// deleteFolder('./content');
getFileInfo('./hello.txt').then((res) => console.log(res));
