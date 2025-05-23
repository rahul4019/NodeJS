import { client } from './client.js';

async function init() {
  //   const result = await client.get('user:2');
  await client.set('msg:5', 'Hello, from rahul');
  await client.expire('msg:5',10);
  const result = await client.get('msg:5');
  console.log(`Result -------> ${result}`);
}

init();
