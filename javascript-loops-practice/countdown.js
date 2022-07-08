/* exported countdown */
function countdown(number) {
  var countArray = [];
  for (var i = number; i >= 0; i--) {
    countArray.push(i);
  }
  return countArray;
}
