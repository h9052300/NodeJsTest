let net = require('net');

const HOST = '127.0.0.1';
const PORT = 18002;

let tcpClient = net.Socket();
tcpClient.connect(PORT, HOST, function () {
    console.log('connect success.');
    tcpClient.write('This is tcp client by Node.js');
});

tcpClient.on('data', function (data) {
    console.log('received : ', data.toString());
});