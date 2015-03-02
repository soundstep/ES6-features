"use strict";

// object destructuring are shortcuts to assign variables from an object

function equinox2() {
  return {
    date: 20,
    month: "March",
    year: 2013,
    time: {
      hour: 11, // nested
      minute: 2
    }
  };
}

var _equinox2 = equinox2();

var d = _equinox2.date;
var m = _equinox2.month;
var h = _equinox2.time.hour;

// h has the value of the nested property while "year" and "minute" are skipped totally

console.log("This year's equinox was on " + d + " " + m + " at " + h); // This year's equinox was on 20March at 11