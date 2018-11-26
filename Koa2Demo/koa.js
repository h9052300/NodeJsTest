const koa = require('koa');
let app = module.exports = koa();
app.keys = ['im a newer secret', 'i like turtle'];
// noinspection JSValidateTypes
app.use(function* () {
    let controller = this.request.path;
    if (controller === "/test/" || controller === "/test") {
        this.body = {
            test: "ok"
        }
    } else if (controller === "/index") {
        this.body = "Hello World";
    } else {
        this.throw(404, "當前內容已罷工~");
    }
    console.log(this.request.path);
}).listen(3999);
