// class

class Language {
  constructor(name, founder, year) {
    this.name = name;
    this.founder = founder;
    this.year = year;
  }
  summary() {
    return this.name + " was created by " + this.founder + " in " + this.year;
  }
}

var js = new Language();

js.name = 'Javascript';
js.founder = 'Brendan Eich';
js.year = 1995;

console.log(js.summary());

// subclass

class MetaLanguage extends Language {
  constructor(name, founder, year, version) {
    super(name, founder, year);
    this.version = version;
  }
}

var html = new MetaLanguage();

html.name = 'HTML';
html.founder = 'Tim Berners-Lee';
html.year = 1991;

console.log(html.summary());
