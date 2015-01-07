// for-of has created to complete for-in

require("6to5/register");

var planets = ["Mercury", "Venus", "Earth", "Mars"];
for (var p of planets) {
  console.log(p); // Mercury, Venus, Earth, Mars
}
 
console.log('------------------------------------------------------');

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
    console.log(e);
    // Set only has unique values, hence Webkit shows only once
}
 
console.log('------------------------------------------------------');

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
  console.log(name + ": " + value);
}