/* exported compact */
// search and index each item of the array
// sort through and find lone elements that don't belong and remove
// place new array items somewhere
// move new array items into new array
// return new array

function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  } return compactArray;
}

// search and index each item of the array
// sort through and removed falsely values from array
// place new array items  in new variable
// move new array items into new array
// returned new array
