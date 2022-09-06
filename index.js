var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    let path = url.parse(req.url).path;
    let match = /.js/.exec(path);
    if (match) {
        console.log(path);
        fs.readFile(path.replace('/', ''), function(error, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' }); 
            res.write(data);
            res.end()

        });
    } else if (path === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end(/* icon content here */);
    } else {
        fs.readFile('app/index.html', function(error, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            res.write(data);
            res.end()
        });
    }
    
}).listen(8080);
