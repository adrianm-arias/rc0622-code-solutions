/* exported last */
// search through an array
// check each index of the array
// find the item with the index value of last element
// extract the last index of an array
// return the last element of the array

function last(array) {
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      return array[i];
    }
  }
}

// searched and indexed each item of the array
// found value of last element with .length - 1
// returned the last element of the array
