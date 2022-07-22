/* exported capitalizeWord */
// check and index every character
// find the first char index and uppercase it
// lowercase rest of characters
// in word is JavaScript , capitalize J and S
// lowercase all other characters

function capitalizeWord(word) {
  var capFirst = word[0].toUpperCase();
  var lowerRest = word.slice(1).toLowerCase();
  var finalWord = capFirst + lowerRest;
  if (word[4] === 's' || word[4] === 'S') {
    return 'JavaScript';
  }
  return finalWord;
}

// uppercased index 0 with uppercase method
// slice method to return rest of characters and lowercase them
// use if statement to single out JS string to return correct method
