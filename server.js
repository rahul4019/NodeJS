import { createServer } from 'node:http';
const PORT = 3000;

const server = createServer((req, res) => {
//   console.log('req: ', req);
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.end('<h1>Hello from Node.js server!</h1>');
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.end('<h1>This is your about page</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
