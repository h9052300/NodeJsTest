const queryString = require('querystring');
var json = queryString.parse('user=blue&pwd=123456&age=18');
console.log(json);