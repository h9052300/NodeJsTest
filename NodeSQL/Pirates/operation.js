// 響應處理模組

let linkDb = require('./linkDb');
let template = require('art-template');
template.defaults.root = './';

linkDb.query(function (results) {
    let html_data = template('./index.html', {results: results});
    exports.html_data = html_data;
});