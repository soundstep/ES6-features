"use strict";

// default parameters

function history() {
  var lang = arguments[0] === undefined ? "C" : arguments[0];
  var year = arguments[1] === undefined ? 1972 : arguments[1];

  return lang + " was created around the year " + year;
}

console.log(history());