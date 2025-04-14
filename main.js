// common js
// const greeter = require('./greet'); // here greeter is a function

// ESM
import { greeter } from './greet.js';

const name = process.argv[2];

const hours = new Date().getHours(); // 24 hours

const greetings = greeter(hours);
console.log(
  `${greetings} ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
);
