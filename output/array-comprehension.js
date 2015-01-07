"use strict";

// Array comprehensions give us a shorthand syntax to manipulate each of the array contents in a certain pattern.
// It is very similar to the map() or filter() methods available in the Array object.

// exmaple ES5

var temperature = [0, 37, 100];
function degToKelvin(deg) {
  return deg + 273;
}
temperature.map(degToKelvin); // [273, 310, 373]

// with ES6


// the following is currently not working: https://github.com/6to5/6to5/issues/412
// this is an ES7 feature: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions


// Array created with 1 loop
// var temperature = [0, 37, 100];
// [t + 273 for (t of temperature)];

// Array created with 3 loops
// var suspects = ["Miss Scarlet", "Colonel Mustard"],
//   weapons = ["Candlestick", "Dagger"],
//   rooms = ["Kitchen", "Ballroom"];

// [(console.log(s + " with a " + w + " in the " + r)) for (s of suspects) for (w of weapons) for (r of rooms)];