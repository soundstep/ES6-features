"use strict";

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

// spread operator is the opposite of the reset parameter, it is used to send a list of parameters

function createURL(comment, path, protocol, subdomain, domain, tld) {
  var shoutout = comment + ": " + protocol + "://" + subdomain + "." + domain + "." + tld + "/" + path;

  console.log(shoutout);
}

var weblink = ["hypertext/WWW/TheProject.html", "http", "info", "cern", "ch"], comment = "World's first Website";

createURL.apply(undefined, [comment].concat(_toArray(weblink))); // spread operator