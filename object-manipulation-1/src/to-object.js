/* exported toObject */
// check and search through array of keyvaluepair
// assign string as new object property
// assign other js value as value
// return object with passed keyvaluepai

function toObject(keyValuePair) {
  var newObject = {};
  for (let i = 0; i < keyValuePair.length; i++) {
    newObject[keyValuePair[0]] = keyValuePair[1];
  }
  return newObject;
}

// check and search through array of keyvaluepair using for loop
// create new object property
// assign key and value using indexes to new object
// return object with passed keyvaluepair
