function ExampleConstructor() {}
console.log(Object.getPrototypeOf(ExampleConstructor));
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var newConstructor = new ExampleConstructor();
console.log('new ExampleConstructor', newConstructor);

var instanceOf = newConstructor instanceof ExampleConstructor;
console.log('instanceof:', instanceOf);
