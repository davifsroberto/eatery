"use strict";
exports.__esModule = true;
var restify = require("restify");
var environment_1 = require("../common/environment");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.initRoutes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.aplication = restify.createServer({
                    name: 'eatery-api',
                    version: '1.0.0'
                });
                _this.aplication.use(restify.plugins.queryParser());
                // Routes
                _this.aplication.get('/info', function (req, resp, next) {
                    resp.json({
                        browser: req.userAgent()
                    });
                    return next();
                });
                _this.aplication.listen(environment_1.environment.server.port, function () {
                    resolve(_this.aplication);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    Server.prototype.bootstrap = function () {
        var _this = this;
        return this.initRoutes().then(function () { return _this; });
    };
    return Server;
}());
exports.Server = Server;
