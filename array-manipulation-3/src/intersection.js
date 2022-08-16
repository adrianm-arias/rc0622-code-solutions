/* exported intersection */
// check and index first array
// check and index second array
// compare both arrays index by index
// if items in array 1 match array 2 if so add to new array
// if not do nothing
// return new array

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
