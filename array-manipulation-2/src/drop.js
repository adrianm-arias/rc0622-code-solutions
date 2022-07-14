/* exported drop */
// check and index items of an array
// use count to detemrine number of items needed to move
// create new array where new items will be stored, without mutating old array
// return new array containing the first count of elements of array

function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      newArray.push(array[i]);
    }
    if (array.length === 0) {
      return [];
    }
  } return newArray;
}

// checked and indexed items of an array
// use count to detemrine number of items needed to move
// created new array where new items will be stored, without mutating old array
// used if statement to verify array isnt empty.
// return new array containing the first count of elements of array
