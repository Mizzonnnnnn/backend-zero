const http = require('http');

const hostname = '127.0.0.1'; // local host
const port = 8080; // noi chay du an

const server = http.createServer((red, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n Hoi Dan It voi eric');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});