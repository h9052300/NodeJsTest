const http = require('http');
http.createServer(function (req, res) {

    //每當發生此事件時，執行方法內的動作
    req.on('data', function (dd) {

    });

    req.on('end',function (dd) {
        
    });
}).listen(8999);