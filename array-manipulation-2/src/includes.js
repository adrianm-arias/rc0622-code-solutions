/* exported includes */
// index each item in the array
// check if any item in array is === value parameter
// return true or false statement

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

// indexed each item in the array using for loop
// check each item against the value with if statement
// if values matched returned true if not returned false
