/* exported omit */
// check index and values of parameter keys
// check index and values of source
// check if any keys property equals any source property
// if yes, do not include matching property in new object
// if no, then add property and value into new object

function omit(source, keys) {
  var newObject = {};
  for (var prop in source) {
    if (!keys.includes(prop)) {
      newObject[prop] = source[prop];
    }
  }
  return newObject;
}

// check source object using for in loop
// if keys parameter matches source object keys do not include in new object
// return new object
