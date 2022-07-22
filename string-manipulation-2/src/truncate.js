/* exported truncate */
// check and index each character of a string
// check if string is longer than length parameter
// if longer reduce string to lengh of parameter and append an elipsis
// if not longer, still append an elipsis

function truncate(length, string) {
  var shortString = '';
  for (var i = 0; i < string.length; i++) {

    if (i < length) {
      shortString += string[i];
    }
  }
  shortString += '...';
  return shortString;
}

// checked and indexed each character of a string
// checked if string is longer than length parameter with for loop
// if longer reduce string to lengh of parameter and append an elipsis with if statement and concactenate elipsis
// if not longer, still append an elipsis
