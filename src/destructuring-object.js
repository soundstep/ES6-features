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
 
var { date: d, month: m, time : { hour: h} } = equinox2();
// h has the value of the nested property while "year" and "minute" are skipped totally
 
console.log("This year's equinox was on " + d + " " + m + " at " + h); // This year's equinox was on 20March at 11
