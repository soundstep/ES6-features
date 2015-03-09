function *foo() {
    yield 0;
    yield 1;
    yield 2;
}

var generator = foo();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
