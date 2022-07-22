/* exported pick */
// index keys parameter
// make sure source parameter object keys are not undefined
// check is keys parameter is equal to keys in source object
// if it is add key/value from source to new object
// return new object

function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}

// indexed keys parameter for loop
// make sure source parameter object keys are not undefined
// checked is keys parameter is equal to keys in source object using an if statement
// if it is add key/value from source to new object
// returned new object
