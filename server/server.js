"use strict";
exports.__esModule = true;
var restify = require("restify");
var environment_1 = require("../common/environment");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.initRoutes = function (routers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.aplication = restify.createServer({
                    name: 'eatery-api',
                    version: '1.0.0'
                });
                _this.aplication.use(restify.plugins.queryParser());
                // Routes
                for (var _i = 0, routers_1 = routers; _i < routers_1.length; _i++) {
                    var router = routers_1[_i];
                    router.applyRoutes(_this.aplication);
                }
                _this.aplication.listen(environment_1.environment.server.port, function () {
                    resolve(_this.aplication);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    Server.prototype.bootstrap = function (routers) {
        var _this = this;
        if (routers === void 0) { routers = []; }
        return this.initRoutes(routers).then(function () { return _this; });
    };
    return Server;
}());
exports.Server = Server;
