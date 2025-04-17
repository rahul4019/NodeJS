import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

import chalk from 'chalk';

import {
  createFile,
  createFolder,
  deleteFile,
  deleteFolder,
  listItems,
  writeToFile,
} from './promisesFs2.js';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

async function menu() {
  console.clear();
  console.log(chalk.blue.bold(`\n📂 File system manager\n`));

  const options = [
    'Create Folder',
    'Create File',
    'Write to file',
    'Delete File',
    'Delete Folder',
    'List Items',
    'Exit',
  ];

  options.forEach((option, index) =>
    console.log(chalk.yellow(index + 1) + chalk.white(` ${option}`))
  );

  const answer = await rl.question(chalk.cyanBright('\nSelect option: '));

  switch (answer) {
    case '1':
      const folderPath = await rl.question(chalk.cyan('Folder Path: '));
      await createFolder(folderPath);
      console.log(chalk.green(`✅ Folder created`));
      break;
    case '2':
      const filePath = await rl.question(chalk.cyan('File Path: '));
      const initialContent = await rl.question(chalk.cyan('Initial Content: '));
      await createFile(filePath, initialContent);
      console.log(chalk.green(`✅ File created`));
      break;
    case '3':
      const appendFilePath = await rl.question(chalk.cyan('File Path: '));
      const appendContent = await rl.question(chalk.cyan('Content: '));
      await writeToFile(appendFilePath, appendContent);
      console.log(chalk.green(`✅ File appended`));
      break;
    case '4':
      const deleteFilePath = await rl.question(chalk.cyan('File Path: '));
      await deleteFile(deleteFilePath);
      console.log(chalk.green(`✅ File deleted`));
      break;
    case '5':
      const deleteFolderPath = await rl.question(chalk.cyan('Folder Path: '));
      await deleteFolder(deleteFolderPath);
      console.log(chalk.green(`✅ Folder deleted`));
      break;
    case '6':
      const listPath = await rl.question(
        chalk.cyan('Folder Path (Press Enter for current): ')
      );
      const items = await listItems(listPath || './');
      console.log(chalk.blue('\nContents:'));
      items.forEach((item) => {
        const icon = item.type === 'folder' ? '📂' : '📄';
        console.log(`${icon} ${chalk.yellow(item.name)} ${item.path}`);
      });
      break;
    case '7':
      rl.close();
      return;
  }

  await rl.question(chalk.gray('\nPress Enter to continue...'));
  menu();
}

menu();
