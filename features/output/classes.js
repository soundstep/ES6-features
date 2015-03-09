"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// class

var Language = (function () {
  function Language(name, founder, year) {
    _classCallCheck(this, Language);

    this.name = name;
    this.founder = founder;
    this.year = year;
  }

  _createClass(Language, {
    summary: {
      value: function summary() {
        return this.name + " was created by " + this.founder + " in " + this.year;
      }
    }
  });

  return Language;
})();

var js = new Language();

js.name = "Javascript";
js.founder = "Brendan Eich";
js.year = 1995;

console.log(js.summary());

// subclass

var MetaLanguage = (function (_Language) {
  function MetaLanguage(name, founder, year, version) {
    _classCallCheck(this, MetaLanguage);

    _get(Object.getPrototypeOf(MetaLanguage.prototype), "constructor", this).call(this, name, founder, year);
    this.version = version;
  }

  _inherits(MetaLanguage, _Language);

  return MetaLanguage;
})(Language);

var html = new MetaLanguage();

html.name = "HTML";
html.founder = "Tim Berners-Lee";
html.year = 1991;

console.log(html.summary());