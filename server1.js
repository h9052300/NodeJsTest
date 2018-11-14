const http = require('http');
const queryString = require('querystring');
var server = http.createServer(function (req, res) {
    var get = {};

    if (req.url.indexOf('?') != -1) {
        var arr = req.url.split('?');
        var url = arr[0];
        get = queryString.parse(arr[1]);

        /**var arr2 = arr[1].split('$');
         for (var i = 0; i < arr2.length; i++) {
            var arr3 = arr2[i].split('=');

            get[arr3[0]] = arr3[1];
        }*/

    } else {
        var url = req.url;
    }

    console.log(url, get);

    res.write('aaa');
    res.end();
}).listen(8888);