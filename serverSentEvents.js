import { createServer } from 'node:http';
import fs from 'node:fs';
const PORT = 3000;

let count = 0;

//* Server sent events (SSE)
const server = createServer(async (req, res) => {
  if (req.url === '/') {
    const htmlPage = fs.createReadStream('./stream.html');
    htmlPage.pipe(res);
  } else if (req.url === '/stream') {
    res.writeHead(200, {
      'content-type': 'text/event-stream',
      'cache-control': 'no-cache',
      connection: 'keep-alive',
    });
    setInterval(() => {
      res.write(`data: The count is ${count++}\n\n`); //* protocol to send data to client
    }, 1000);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
