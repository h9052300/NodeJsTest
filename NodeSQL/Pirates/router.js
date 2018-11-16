let fs = require('fs');
let oper = require('./operation');

exports.bind = function (server) {

    server.on('request', function (request, response) {

        let urls = request.url;
        if (urls === '/') {
            // fs.readFile('./index.html', function (err, data) {
            let data = oper.html_data;
                response.end(data);

            // });
        } else {
            fs.readFile('.' + urls, function (err, data) {
                response.end(data);
            })
        }
    })
};