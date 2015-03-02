"use strict";

// array that represents a list of parameters

function push(array) {
  for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }

  // defining rest parameters with 3 dot syntax
  items.forEach(function (item) {
    array.push(item);
    console.log(item);
  });
}

// 1 fixed + 4 variable parameters
var planets = [];
console.log("Inner planets of our Solar system are: ");
push(planets, "Mercury", "Venus", "Earth", "Mars"); // rest parameters