/* exported getKeys */
// check through objects properties
// extract properties and place in new array
// return new array

function getKeys(object) {
  var objectArray = [];
  for (var property in object) {
    objectArray.push(property);
  }
  return objectArray;
}

// checked through objects properties
// created new array for object properties
// extracted object properties using for in loop
// return new array with object keys
