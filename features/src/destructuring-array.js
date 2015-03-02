// array destructuring are shortcuts to assign variables from an array

var [ start, end ] = ["earth", "moon"] // initialize
console.log(start + " calling " + end); // earth calling moon

// ------------------------------------------------------------------------------------------------------------

[start, end] = [end, start] // variable swapping
console.log(start + " calling " + end); // moon calling earth

// ------------------------------------------------------------------------------------------------------------

function equinox() {
  return [20, "March", 2013, 11, 2];
}
var [date, month, , , day] = equinox();
console.log("This year's equinox was on " + date + " " + month + ", on day " + day); // This year's equinox was on 20March
