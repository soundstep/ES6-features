var count = 0;

let makeAjaxRequest = function (url) {
    return function (callback) {
        setTimeout(function() {
            ++count;
            console.log('   response:', count);
            callback(null, count);
        }, 500);
    };
};


function *getBunch() {

    let data;
    let list = [];

    data = yield makeAjaxRequest('https://api.myjson.com/bins/2qjdn');
    list.push(data);

    data = yield makeAjaxRequest('https://api.myjformatson.com/bins/3zjqz');
    list.push(data);

    data = yield makeAjaxRequest('https://api.myjson.com/bins/29e3f');
    list.push(data);

    console.log('>> list:', list);
}

let runGenerator = function (fn) {
    let next = function (err, arg) {
        if (err) return it.throw(err);
        var result = it.next(arg);
        if (result.done) return;
        if (typeof result.value == 'function') {
            result.value(next);
        }
        else {
            next(null, result.value);
        }
    };
    let it = fn();
    return next();
}

runGenerator(getBunch);
