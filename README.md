# ES6

## Features (compiled with [Babel](https://babeljs.io/))

Install dependencies

	$ npm install

Compile ES6 code to ES5

	$ ./node_modules/.bin/babel features/src --out-dir features/output

To run a feature, use node or babel-node

	$ node features/output/let.js

Or in some cases (when a polyfill is required)

	$ ./node_modules/.bin/babel-node features/output/generators.js
	$ ./node_modules/.bin/babel-node features/output/generators-async.js
	$ ./node_modules/.bin/babel-node features/output/generators-promise.js

Useful links:

* http://kangax.github.io/compat-table/es6/
* https://6to5.org/docs/compare/#comparison-to-other-transpilers

## App with (created with [jspm](http://jspm.io/))

	$ npm install -g jspm
	$ npm install -g live-server
	$ cd app/
	$ jspm install
	$ live-server

Useful links:

* https://github.com/jspm/jspm-cli/wiki/Getting-Started
