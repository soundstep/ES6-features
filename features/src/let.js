// JavaScript variables are function-scoped
// let is block-scoped

'use strict';

// ------------------------------------------------------------------

var es = [];
for (var i = 0; i < 10; i++) {
  es[i] = function () {
    console.log("Upcoming edition of ECMAScript is ES" + i);
  };
}
es[6](); // Upcoming edition of ECMAScript is ES10

// ------------------------------------------------------------------

var es = [];
for (var i = 0; i < 10; i++) {
  let c = i;
  es[i] = function () {
    console.log("Upcoming edition of ECMAScript is ES" + c);
  };
}
es[6](); // Upcoming edition of ECMAScript is ES6