"use strict";
exports.__esModule = true;
exports.Reqmsg = void 0;
var Reqmsg = /** @class */ (function () {
    function Reqmsg(msg) {
        this.regmsg = msg;
    }
    Reqmsg.prototype.console = function () {
        return console.log(this.regmsg);
    };
    return Reqmsg;
}());
exports.Reqmsg = Reqmsg;
