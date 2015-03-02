"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

// array destructuring are shortcuts to assign variables from an array

var start = "earth";
var end = "moon";
// initialize
console.log(start + " calling " + end); // earth calling moon

// ------------------------------------------------------------------------------------------------------------

var _ref = [end, start];

var _ref2 = _slicedToArray(_ref, 2);

start = _ref2[0];
end = _ref2[1];
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