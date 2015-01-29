"use strict";

// array that represents a list of parameters

function push(array) {
  var items = [];

  for (var _key = 1; _key < arguments.length; _key++) {
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