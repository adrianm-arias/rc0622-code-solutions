/* exported getValues */
// check through objects values
// extract values and place in new array
// return new array

function getValues(object) {
  var objectArray = [];
  for (var property in object) {
    objectArray.push(object[property]);
  }
  return objectArray;
}

// checked through objects values
// created new array for object values
// extracted object values using for in loop
// return new array with object values
