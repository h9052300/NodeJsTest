let http = require("http");
let url = require("url");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    // response.setHeader('Content-Type', 'text/html;charset=utf-8');

    response.write('你好Node.js');
    response.write('GGGG');
    response.write('morning!');

    response.end();

}).listen(8008);