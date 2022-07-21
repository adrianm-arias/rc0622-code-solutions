/* exported chunk */
// check and index each item in the array
// extract elements into an array depending on size parameter
// push extracted array into final array
// return final array

function chunk(array, size) {
  var finalArray = [];
  for (var i = 0; i < array.length; i += size) {
    finalArray.push(array.slice(i, size + i));
  }
  return finalArray;
}

// checked and indexed each item in the array
// extracted elements into an array depending on size parameter using for loop
// push extracted array into final array increment using size in the for loop
// return final array
