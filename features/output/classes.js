"use strict";

var _inherits = function (child, parent) {
  if (typeof parent !== "function" && parent !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
  }
  child.prototype = Object.create(parent && parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (parent) child.__proto__ = parent;
};

// class

var Language = function Language(name, founder, year) {
  this.name = name;
  this.founder = founder;
  this.year = year;
};

Language.prototype.summary = function () {
  return this.name + " was created by " + this.founder + " in " + this.year;
};

var js = new Language();

js.name = "Javascript";
js.founder = "Brendan Eich";
js.year = 1995;

console.log(js.summary());

// subclass

var MetaLanguage = (function () {
  var _Language = Language;
  var MetaLanguage = function MetaLanguage(name, founder, year, version) {
    _Language.call(this, name, founder, year);
    this.version = version;
  };

  _inherits(MetaLanguage, _Language);

  return MetaLanguage;
})();

var html = new MetaLanguage();

html.name = "HTML";
html.founder = "Tim Berners-Lee";
html.year = 1991;

console.log(html.summary());