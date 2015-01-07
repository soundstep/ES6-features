// array that represents a list of parameters

function push(array, ...items) { // defining rest parameters with 3 dot syntax
  items.forEach(function(item) {
    array.push(item);
    console.log( item );
  });
}
 
// 1 fixed + 4 variable parameters
var planets = [];
console.log("Inner planets of our Solar system are: " );
push(planets, "Mercury", "Venus", "Earth", "Mars"); // rest parameters