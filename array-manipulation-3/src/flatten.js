/* exported flatten */
// check and index array parameter
// check if current index is an array
// if yes, check array current index
// push values of index to new array
// if not push array as is to new variable
// return new array

function flatten(array) {
  var newArray = [];
  for (var y = 0; y < array.length; y++) {
    if (Array.isArray(array[y])) {
      for (var x = 0; x < array[y].length; x++) {
        newArray.push(array[y][x]);
      }
    } else {
      newArray.push(array[y]);
    }
  }
  return newArray;
}

// checked and indexed array parameter with for loop
// checked if current index is an array with isArray
// if yes, check array current index using another nested for loop
// push values of index to new array
// if not push array as is to new variable
// return new array
