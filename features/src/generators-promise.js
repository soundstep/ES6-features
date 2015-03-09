var count = 0;

function makeAjaxRequest(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            ++count;
            console.log('   response:', count);
            resolve(count);
        }, 500);
    });
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
    let it = fn();
    let ret;
    // asynchronously iterate over generator
    (function iterate(val){
        ret = it.next( val );
        if (!ret.done) {
            // poor man's "is it a promise?" test
            if ("then" in ret.value) {
                // wait on the promise
                ret.value.then( iterate );
            }
            // immediate value: just send right back in
            else {
                // avoid synchronous recursion
                setTimeout( function(){
                    iterate( ret.value );
                });
            }
        }
    })();
}

runGenerator(getBunch);
