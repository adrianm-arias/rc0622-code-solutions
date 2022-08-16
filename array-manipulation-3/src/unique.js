/* exported unique */
// check and index array parameter
// check if index is not found in new array parameter then add it to the new array
// return new array variable

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// checked and indexed array parameter using for loop
// checked if index is not found in new array parameter then add it to the new array using if statement
// return new array variable
