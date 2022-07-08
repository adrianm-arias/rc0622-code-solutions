/* exported capitalize */
// uppercase first letter of string
// lowercase rest of letters of string

function capitalize(word) {
  var cap = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return cap;
}

// uppercase first letter of string
// delete older lowercase initial letter
// lowercase rest of letters of string
// concatenated upppercase letter with lowercase letters
