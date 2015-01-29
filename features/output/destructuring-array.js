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

// array destructuring are shortcuts to assign variables from an array

var _ref = ["earth", "moon"];

var _ref2 = _slicedToArray(_ref, 2);

var start = _ref2[0];
var end = _ref2[1];
// initialize
console.log(start + " calling " + end); // earth calling moon

// ------------------------------------------------------------------------------------------------------------

var _ref3 = [end, start];

var _ref3 = _slicedToArray(_ref3, 2);

start = _ref3[0];
end = _ref3[1];
// variable swapping
console.log(start + " calling " + end); // moon calling earth

// ------------------------------------------------------------------------------------------------------------

function equinox() {
  return [20, "March", 2013, 11, 2];
}
var _equinox = equinox();

var _equinox2 = _slicedToArray(_equinox, 5);

var date = _equinox2[0];
var month = _equinox2[1];
var day = _equinox2[4];
console.log("This year's equinox was on " + date + " " + month + ", on day " + day); // This year's equinox was on 20March