/* exported head */
// be able to search through an array
// find the indexes of each item of that array
// find the item with the index value of 0
// extract the first index of an array
// return the first element of that array

function head(array) {
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      return array[i];
    }
  }
}

// able to search through array and find indexes of each item with for loop
// extracted the first index of the array using if statement
// returned the name of first element of array
