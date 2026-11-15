import { createServer } from 'node:http';
createServer((req, res) => { res.writeHead(200); res.end(req.url === '/old' ? 'build=old\n' : 'build=consumer-ok\n'); })
  .listen(8765, '127.0.0.1', () => console.log('ready'));
