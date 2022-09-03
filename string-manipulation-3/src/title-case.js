/* exported titleCase */
/*
  - check and index characters from title
  - capitalize first letter of the word
  - filter for words that are not including in check.
  - capitalize first letter of the word
  - check if the word inclues special characters
  - capitalize first letter of the word
  - check for any exceptions from instructions
  - check if word is 'javascript'
  - check if word is 'api'
  - return final string
*/

function titleCase(string) {
  let answerString = '';
  let capitalizedWord = '';
  const capitalizedArr = [];
  const words = string.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'javascript' || words[i] === 'javascript:') {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1, 4) + words[i][4].toUpperCase() + words[i].slice(5);
      capitalizedArr.push(capitalizedWord);
    } else if (words[i] === 'api') {
      capitalizedWord = words[i].toUpperCase();
      capitalizedArr.push(capitalizedWord);
    } else if (i === 0) {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    } else if (capitalizedArr[i - 1].includes(':')) {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    } else if (words[i].includes('-')) {
      let letter = '';
      const hyphenWord = [];
      for (let a = 0; a < words[i].length; a++) {
        if (words[i][a - 1] === '-') {
          letter = words[i][a].toUpperCase();
          hyphenWord.push(letter);
        } else if (a === 0) {
          letter = words[i][a].toUpperCase();
          hyphenWord.push(letter);
        } else {
          letter = (words[i][a]);
          hyphenWord.push(letter);
        }
      }
      capitalizedArr.push(hyphenWord.join(''));
    } else if (words[i] === 'in' || words[i] === 'for' || words[i] === 'of' || words[i] === 'the' ||
      words[i] === 'to' || words[i] === 'on' || words[i] === 'and') {
      capitalizedArr.push(words[i]);
    } else {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    }
  }
  answerString = capitalizedArr.join(' ');
  return answerString;
}
