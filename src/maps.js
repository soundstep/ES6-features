// Maps are quite similar to JavaScript object key-value pairs.
// In ES6, the key can be any JavaScript data type and not just strings.

require("6to5/register");

var es6 = new Map(); // create new Map
 
es6.set("edition", 6);        // key is string
es6.set(262, "standard");     // key is number
es6.set(undefined, "nah");    // key is undefined
 
var hello = function() {console.log("hello");};
es6.set(hello, "Hello ES6!"); // key is function
 
console.log( "Value of 'edition' exits? " + es6.has("edition") );     // true
console.log( "Value of 'year' exits? " + es6.has("years") );          // false
console.log( "Value of 262 exits? " + es6.has(262) );                 // true
console.log( "Value of undefined exits? " + es6.has(undefined) );     // true
console.log( "Value of hello() exits? " + es6.has(hello) );           // true
 
es6.delete(undefined); // delete map
console.log( "Value of undefined exits? " + es6.has(undefined) );      // false
 
console.log( es6.get(hello) ); // Hello ES6!
console.log( "Work is in progress for ES" + es6.get("edition") ); // Work is in progress for ES6