"use strict";

var getBunch = regeneratorRuntime.mark(function getBunch() {
    var data, list;
    return regeneratorRuntime.wrap(function getBunch$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                data = undefined;
                list = [];
                context$1$0.next = 4;
                return makeAjaxRequest("https://api.myjson.com/bins/2qjdn");

            case 4:
                data = context$1$0.sent;

                list.push(data);

                context$1$0.next = 8;
                return makeAjaxRequest("https://api.myjformatson.com/bins/3zjqz");

            case 8:
                data = context$1$0.sent;

                list.push(data);

                context$1$0.next = 12;
                return makeAjaxRequest("https://api.myjson.com/bins/29e3f");

            case 12:
                data = context$1$0.sent;

                list.push(data);

                console.log(">> list:", list);

            case 15:
            case "end":
                return context$1$0.stop();
        }
    }, getBunch, this);
});
var count = 0;

var makeAjaxRequest = function makeAjaxRequest(url) {
    return function (callback) {
        setTimeout(function () {
            ++count;
            console.log("   response:", count);
            callback(null, count);
        }, 500);
    };
};

var runGenerator = function runGenerator(fn) {
    var next = (function (_next) {
        var _nextWrapper = function next(_x, _x2) {
            return _next.apply(this, arguments);
        };

        _nextWrapper.toString = function () {
            return _next.toString();
        };

        return _nextWrapper;
    })(function (err, arg) {
        if (err) return it["throw"](err);
        var result = it.next(arg);
        if (result.done) return;
        if (typeof result.value == "function") {
            result.value(next);
        } else {
            next(null, result.value);
        }
    });
    var it = fn();
    return next();
};

runGenerator(getBunch);