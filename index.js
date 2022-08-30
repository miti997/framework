var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    let path = url.parse(req.url).path;
    if (path === '/') {
        fs.readFile('index.html', function(error, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            res.write(data);
            res.end()
        });       
    } else if (path === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end(/* icon content here */);
    } else {
        fs.readFile(`.${path}`, function(error, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' }); 
            res.write(data);
            res.end()

        });
    }
    
}).listen(8080);
