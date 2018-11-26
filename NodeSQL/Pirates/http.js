// 服務啟動模組

let http = require('http');
let router = require('./router');
let server = http.createServer();

router.bind(server);

server.listen('8888', function () {
    console.log("請開啟瀏覽器訪問 http://localhost:8888 ");
});