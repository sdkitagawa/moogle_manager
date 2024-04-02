var http = require('http');

http.createServer(function (req, res) {
    res.write("キタガワさん～ I'm running!");
    res.end();
}).listen(8080);
