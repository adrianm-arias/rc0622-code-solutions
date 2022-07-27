/* exported invert */
// loop through object properties
// invert key values and pro values into new object
// return new object

function invert(source, keys) {
  var newObject = {};
  for (var prop in source) {
    newObject[source[prop]] = prop;
  }
  return newObject;
}

// looped through object with for in loop
// using for loop invert key valyes and prop values into new object
// return new object
