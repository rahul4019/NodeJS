const name = process.argv[2];

const hours = new Date().getHours(); // 24 hours

function greet(hours) {
  if (hours < 4 || hours >= 19) return 'Good night';
  if (hours < 9) return 'Good morning';
  if (hours < 16) return 'Good afternoon';
  return 'Good evening';
}

const greetings = greet(hours);
// console.log(name.charAt(0).toUpperCase());
console.log(name.slice(0,2));
console.log(
  `${greetings} ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
);
