const http = require('http');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    console.log(page);
    if(page == '/'){
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
    else if(page == '/css/style.css'){
        fs.readFile('css/style.css', (err, data) => {
            res.write(data);
            res.end();
        });
    }
    else if(page == '/js/index.js'){
        fs.readFile('js/index.js', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        });
    }
    else if(page == '/api'){
        const params = querystring.parse(url.parse(req.url).query);
        const obj = {name: params.name};
        res.end(JSON.stringify(obj));
    }
    else{
        figlet('ERROR 404: PAGE NOT FOUND', (err, data) => {
            if(err) throw err;
            else{
                res.write(data);
                res.end();
            }
        })
    }
});

server.listen(5000); //listen on port 5000