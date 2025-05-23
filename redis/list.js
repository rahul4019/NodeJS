import { client } from './client.js';

async function init() {
  await client.lpush('messages', 1);
  await client.lpush('messages', 2);
  await client.lpush('messages', 3);
  await client.lpush('messages', 4);
  const result = await client.rpop('messages');
  console.log(`Result : ${result}`);
}

init();
