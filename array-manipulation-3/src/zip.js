/* exported zip */
// create a new array to hold sub arrays
// check which array is the smallest
// index both arrays
// push first array item into new array
// push second array item into new array
// Return new array variable

function zip(first, second) {
  var newArray = [];
  var holdArray = [];
  var smallArray = [];
  if (first.length < second.length) {
    smallArray = first;
  } else {
    smallArray = second;
  }
  for (var i = 0; i < smallArray.length; i++) {
    holdArray.push(first[i]);
    holdArray.push(second[i]);
    newArray.push(holdArray);
    holdArray = [];
  }
  return newArray;
}
