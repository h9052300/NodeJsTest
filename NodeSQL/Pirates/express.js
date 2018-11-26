let net = require('net');

const PORT = 18002;
const HOST = '127.0.0.1';

let clientHandler = function (socket) {
    console.log('someone connected.');

    socket.on('data', function dataHandler(data) {
        console.log(socket.remoteAddress, socket.remoteMRTCPPort, 'send', data.toString());
    });

    socket.on('close', function () {
        console.log(socket.remoteAddress, socket.remoteMRTCPPort, 'disconnected.');
    });
};

let server = net.createServer(clientHandler);

server.listen(PORT, HOST);
console.log('tcp server running on tcp://', HOST, ' : ', PORT);