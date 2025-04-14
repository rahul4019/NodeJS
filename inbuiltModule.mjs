import os from 'node:os';

// console.log('CPUs: ', os.cpus());
console.log('CORE Count: ', os.cpus().length); // no. of cores (not physical)

console.log('Total Memory: ', os.totalmem() / (1024 * 1024 * 1024).toFixed(2)); // memory size in GB

console.log('Free Memory: ', os.freemem() / (1024 * 1024)); // free memory size in MB

console.log('Uptime: ', (os.uptime() / (60 * 60)).toFixed(2)); // system time in hours

console.log('Hostname: ', os.hostname());

console.log('User info: ', os.userInfo());

console.log('Machine : ', os.machine());
