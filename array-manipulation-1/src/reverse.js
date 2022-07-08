/* exported reverse */
// search and index each item of the array in reverse
// place new array items somewhere
// move new array items into new array
// return new array

function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

// search and index each item of the array in reverse by
// using .length to find the length and start from back
// placed new array items somewhere
// move new array items into new array
// return new array
