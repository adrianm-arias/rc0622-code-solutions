/* exported take */
// check and index items of an array
// use count to detemrine number of items needed to move
// create new array where new items will be stored, without mutating old array
// return new array containing the first count of elements of array

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return [];
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// checked and indexed items of an array
// use count to detemrine number of items needed to move
// created new array where new items will be stored, without mutating old array
// used if statement to verify array isnt empty.
// return new array containing the first count of elements of array
