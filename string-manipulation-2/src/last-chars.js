/* exported lastChars */
// check and index characters of string
// add characters to new string if the index is number is more than the length parameter
// return new string

function lastChars(length, string) {
  var shortString = '';
  for (var i = 0; i < string.length; i++) {
    if (i > (string.length - 1) - length) {
      shortString += string[i];
    }
  }
  return shortString;
}

// checked and indexed characters of string with for loop
// added characters to new string if the index is number is more string's lenght - the length parameter
// returned new string
