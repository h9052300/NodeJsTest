const net = require("net");
var server = net.createServer(function (cond) {
    console.log("用戶已連接~");
    cond.on('end', function () {
        console.log("用戶未連接");
    });

    cond.write("hello\r\n");
    cond.pipe();

}).listen(8124);

server.on('error',function (err) {
    throw err;
});

