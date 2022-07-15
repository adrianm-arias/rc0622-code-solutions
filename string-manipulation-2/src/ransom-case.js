/* exported ransomCase */
// index each character in the string
// if character is odd number capitalize it
// if character is even lower case it
// return new string

function ransomCase(string) {
  var lowerCase = string.toLowerCase();
  var lowerCaseSplit = lowerCase.split('');
  var newString = '';
  for (var i = 0; i < lowerCaseSplit.length; i++) {
    if (i % 2 === 0) {
      newString += lowerCaseSplit[i];
    } else {
      var upperChar = lowerCaseSplit[i].toUpperCase();
      newString += upperChar;
    }
  }
  return newString;
}

// indexed and split up string with .split method
// made all characters lowercase
// checked if index of each character was odd or even using if statement
// if odd made it uppercase
// if even just left it alone
// return new string
