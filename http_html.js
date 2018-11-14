/** 1. 創建http Server
 *  2. 綁定請求事件
 *  3. 接受請求
 *  4. 使用fs模組，將index.html的內容讀取出來
 *  5. 將讀出來的字串響應回客戶端
 */

const http = require('http');
const fs = require('fs');
var server = http.createServer();

server.on('request', function (res, rep) {
    if (res.url == '/') {
        fs.readFile('./index.html', 'utf8', function (err, data) {
            rep.setHeader('Content-Type', 'text/html;charset=utf8');
            rep.end(data);

        })
    } else if (res.url == 'img/Capture001.png') {
        fs.readFile('./img/Capture001.png', function (err, data) {
            rep.end(data);
        });
    }

});

server.listen(8000, function () {
    console.log('請訪問 : 127.0.0.1:8000');
});