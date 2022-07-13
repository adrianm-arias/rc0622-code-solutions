/* exported takeRight */
// index each item in the array in reverse
//  extract items which  are equal or less than the count
// if count is larger than array then return copy of array

function takeRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= array.length - count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

//  extract items which  are equal or less than the count with for loop and if statement
// if count is larger than array then return copy of array
