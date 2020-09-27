const app = require("./server");
const http = require("http");

http.createServer(app).listen(5050);
console.log("listen");
