const http = require('http');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    console.log(page);
    res.end();
});

server.listen(5000); //listen on port 5000