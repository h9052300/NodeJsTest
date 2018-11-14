var http = require('http');
var server = http.createServer();

//將server綁定request事件，如果別人訪問我，function就執行
server.on('request', function (require, response) {

    //設置響應頭
    response.setHeader('Content-Type', 'text/html;charset=UTF-8');

    //往響應主體想寫入訊息
    response.write('好朋友');
    response.write('<h1>吃早餐</h1>');

    // 提示server響應已經結束
    response.end();
});

server.listen(8080, function () {
    console.log('請訪問127.0.0.1:8080');
});