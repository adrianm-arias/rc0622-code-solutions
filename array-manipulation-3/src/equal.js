/* exported equal */
// index both arrays
// check if each index matches other arrays index value
// return boolean showing if arrays match

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// check if boths arrays have same length if not returned false
// indexed and check that both arrays i matched, if so return true if not returned false
