/* exported pick */
// index keys parameter
// make sure source parameter object keys are not undefined
// check is keys parameter is equal to keys in source object
// if it is add key/value from source to new object
// return new object

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (source[prop] === undefined) {
        continue;
      } else if (keys[i] === prop) {
        newObject[prop] = source[prop];
      }
    }
  }
  return newObject;
}

// indexed keys parameter using for loop
// indexed source object using for in loop
// make sure source parameter object keys are not undefined
// checked is keys parameter is equal to keys in source object using an if statement
// if it is add key/value from source to new object
// returned new object
