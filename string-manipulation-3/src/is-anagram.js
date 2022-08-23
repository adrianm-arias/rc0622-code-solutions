/* exported isAnagram */
/*
  - index firstString by character
  - index secondString by character
  - look through firstString
    - if current index is empty or underfined -> continue
    - otherwise push current index  to newArray1
   - loop through secondString
    - if current index is not empty space push into newArray2
  - sort and join variables for newArray 2 & newArray 1
  - if both newArray 1 equal newArray 2 then return true
    - otherwise return false
*/

function isAnagram(firstString, secondString) {
  const splitFirst = firstString.split('');
  const splitSecond = secondString.split('');

  const newArray1 = [];
  for (let i = 0; i < splitFirst.length; i++) {
    if (splitFirst[i] === undefined || splitFirst[i] === ' ') {
      continue;
    } else {
      newArray1.push(splitFirst[i]);
    }
  }

  const newArray2 = [];
  for (let y = 0; y < splitSecond.length; y++) {
    if (splitSecond[y] === undefined || splitSecond[y] === ' ') {
      continue;
    } else {
      newArray2.push(splitSecond[y]);
    }
  }

  if (newArray1.sort().join('') === newArray2.sort().join('')) {
    return true;
  } else {
    return false;
  }
}
