"use strict";

var _slicedToArray = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  }
};

// for-of has created to complete for-in

require("6to5/register");

var planets = ["Mercury", "Venus", "Earth", "Mars"];
for (var _iterator = planets[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
  var p = _step.value;
  console.log(p); // Mercury, Venus, Earth, Mars
}

console.log("------------------------------------------------------");

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var _iterator2 = engines[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
  var e = _step2.value;
  console.log(e);
  // Set only has unique values, hence Webkit shows only once
}

console.log("------------------------------------------------------");

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var _iterator3 = es6[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
  var _ref = _step3.value;
  var _ref2 = _slicedToArray(_ref, 2);

  var name = _ref2[0];
  var value = _ref2[1];
  console.log(name + ": " + value);
}