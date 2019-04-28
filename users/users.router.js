"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Router_1 = require("../common/Router");
var users_model_1 = require("../users/users.model");
var UsersRouter = /** @class */ (function (_super) {
    __extends(UsersRouter, _super);
    function UsersRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsersRouter.prototype.applyRoutes = function (aplication) {
        aplication.get('/users', function (req, resp, next) {
            users_model_1.User.findAll().then(function (users) {
                resp.json(users);
                return next();
            });
        });
        aplication.get('/users/:id', function (req, resp, next) {
            users_model_1.User.findByid(req.params.id).then(function (user) {
                if (user) {
                    resp.json(user);
                    return next();
                }
                resp.send(404);
                return next();
            });
        });
    };
    return UsersRouter;
}(Router_1.Router));
exports.usersRouter = new UsersRouter();
