"use strict";
exports.__esModule = true;
var server_1 = require("./server/server");
var server = new server_1.Server();
server.bootstrap().then(function (server) {
    console.log('Server is listening on:', server.aplication.address());
})["catch"](function (error) {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
