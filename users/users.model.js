"use strict";
exports.__esModule = true;
var users = [
    { id: '1', name: 'Rafael do Gueto', email: 'fresh-prince-of-bel@air.com' },
    { id: '2', name: 'Michael Richard Kyle', email: 'my-wife-and@kids.com' }
];
var User = /** @class */ (function () {
    function User() {
    }
    User.findAll = function () {
        return Promise.resolve(users);
    };
    User.findByid = function (id) {
        return new Promise(function (resolve) {
            var filtered = users.filter(function (user) { return user.id === id; });
            var user = undefined;
            if (filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    };
    return User;
}());
exports.User = User;
