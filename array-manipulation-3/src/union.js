/* exported union */
// check and index both arrays
// create new array
// check if first array items are not in new array
// if they are not then add them
// check if second array itmes are not in new array
// if they are not then add them

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var y = 0; y < second.length; y++) {
    if (!newArray.includes(second[y])) {
      newArray.push(second[y]);
    }
  }
  return newArray;
}
