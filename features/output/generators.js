"use strict";

var foo = regeneratorRuntime.mark(function foo() {
    return regeneratorRuntime.wrap(function foo$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return 0;

            case 2:
                context$1$0.next = 4;
                return 1;

            case 4:
                context$1$0.next = 6;
                return 2;

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, foo, this);
});

var generator = foo();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());