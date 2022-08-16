/* exported difference */
// check and index first array
// check and index second array
// compare both arrays index by index
// if they match do nothing
// if they don't add them to new array
// return new array

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var y = 0; y < second.length; y++) {
    if (!first.includes(second[y])) {
      newArray.push(second[y]);
    }
  }
  return newArray;
}
