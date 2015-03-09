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

function makeAjaxRequest(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            ++count;
            console.log("   response:", count);
            resolve(count);
        }, 500);
    });
};

var runGenerator = function runGenerator(fn) {
    var it = fn();
    var ret = undefined;
    // asynchronously iterate over generator
    (function iterate(val) {
        ret = it.next(val);
        if (!ret.done) {
            // poor man's "is it a promise?" test
            if ("then" in ret.value) {
                // wait on the promise
                ret.value.then(iterate);
            }
            // immediate value: just send right back in
            else {
                // avoid synchronous recursion
                setTimeout(function () {
                    iterate(ret.value);
                });
            }
        }
    })();
};

runGenerator(getBunch);