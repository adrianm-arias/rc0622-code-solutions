function converMinutesToSeconds(minutes) {
  var multiply = minutes * 60;
  return multiply;
}

var converMinutesToSecondsResult = converMinutesToSeconds(5);

console.log('convertMinutesToSecondsResults:', converMinutesToSecondsResult);

function greet(name) {
  var sayHello = 'Hey, ' + name;
  return sayHello;
}

var greetResults = greet('Beavis');

console.log('greetResults:', greetResults);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResults = getArea(17, 42);

console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('getFirstNameResults:', getFirstNameResults);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElementResults:', getLastElementResults);
