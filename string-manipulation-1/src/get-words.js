/* exported getWords */
// seperated strings by spaces
// add seperate strings into array

function getWords(string) {
  if (string !== '') {
    var word = string.split(' ');
    return word;
  }
  return [];
}

// seperated strings with split
// use if statement to return emtpy space is not string is presented
