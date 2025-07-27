import * as fs from 'node:fs';
import crypto from 'node:crypto';

const start = Date.now();


/*  when we run node index.js. 
    1. Node.js creates a process which runs on main thread
    2. initilizes the project
    3. runs Top level code (eg., console.log("Hello world!"))
    4. then all the require/import module will run
    5. Event callbacks will be registered (not run)
    6. Event loop starts
    7. CPU intensive tasks are offloaded to thread pool
*/

//* in the thread pool there are 4 threads available, it can go upto 128 threads

/*
    These thread pools are used for CPU intensive tasks like (file system tasks, encryption/decryption, compression)
*/

/* 
    Event Loop working
    1. after running top level code Expired Timer callbacks gets executed
    2. IO Polling (success callback asynchronus file reading)
    3. setImmediate callbacks
    4. Close callbacks (callback to close server, socket etc.)
    5. now event loop will check if there is any pending task if no then exit 
    6. if yes then repeat the first step again
*/

setTimeout(() => console.log('Hello from timer 1'), 0);

setImmediate(() => console.log('Hello from Immediate Fn 1'));

fs.readFile('sample.txt', 'utf8', () => {
  console.log('IO Polling Finished');

  setTimeout(() => console.log('Hello from timer 2'), 0);
  setTimeout(() => console.log('Hello from timer 3'), 5 * 1000);
  setImmediate(() => console.log('Hello from Immediate Fn 2'));

  // CPU Intensive task
  crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}, Password1 Done`);
  });

  crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start},Password2 Done`);
  });

  crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start},Password3 Done`);
  });

  crypto.pbkdf2('password4', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start},Password4 Done`);
  });

  crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start},Password5 Done`);
  });

  crypto.pbkdf2('password6', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start},Password6 Done`);
  });
});

console.log('Hello from Top Level Code');
