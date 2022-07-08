/* exported tail */
// search and index each item of the array
// place new array items somewhere
// extract array items with index higher than 0
// move new array items into new array
// return new array

function tail(array) {
  var tailArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      tailArray.push(array[i]);
    }
  } return tailArray;
}

// searched and indexed each item of the array
// created a var to store new array items
// using if statement verified any item with index higher than 0
// using push method moved items into new array
// returned new array
