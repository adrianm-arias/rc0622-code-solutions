/* exported capitalizeWords */
// lowercase all words
// seperate strings into individual words
// capitalize the beginning character of each word
// combine each word into its original sentence

function capitalizeWords(string) {
  var stringLower = string.toLowerCase();
  var array = stringLower.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  var newString = array.join(' ');
  return newString;
}

// lowercased all words
// seperated strings into an array of individual words with split method
// * the beginning character of each word
// combine each word into its original sentence
