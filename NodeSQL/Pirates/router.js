exports.bind = function (server) {

    server.on('request', function (request, response) {
        response.setHeader('Content-Type', 'text/html;charset=UTF-8');
        response.end('早安蛋捲');

    })
};