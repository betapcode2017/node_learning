var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead('200', {'Content-Type': 'image/png'});
    fs.createReadStream('yotsuba.png').pipe(res);
}).listen(3000);
console.log('Server running at http://localhost:3000/');