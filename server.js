import { createServer } from 'node:http';
import fs from 'node:fs';
import fsPromise from 'node:fs/promises';
const PORT = 3000;

const server = createServer(async (req, res) => {
  //* req is a readable stream
  //   console.log('req: ', req);
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });

    // const data = await fs.readFile('./index.html');

    const dataStream = fs.createReadStream('./index.html');

    //* data event on stream
    // dataStream.on('data',(chunk) => {
    //     //* res is a writeable stream
    //     res.write(chunk)
    // })

    //* end event on stream
    // dataStream.on('end',() => {
    //     res.end()
    // })

    dataStream.pipe(res); //* short method

    // res.end('<h1>Hello from Node.js server!</h1>');
    // res.end(data);
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.end('<h1>This is your about page</h1>');
  } else if (url === '/expenses') {
    // API for expenses

    let buff = '';
    // create an expense
    if (req.method === 'POST') {
      req.on('data', (chunk) => {
        // console.log('chunk', chunk); // chunk is binary data
        buff = buff + chunk.toString();
      });

      req.on('end', async () => {
        const data = await fsPromise.readFile('./db.json');

        const dbData = JSON.parse(data); // parsing json to javascript object
        dbData.push(JSON.parse(buff));

        
        await fsPromise.writeFile('./db.json', JSON.stringify(dbData, null, 2));
        res.end('OK');
      });
    } else if (req.method === 'GET') {
        const data = await fsPromise.readFile('./db.json')
        res.end(data)
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
