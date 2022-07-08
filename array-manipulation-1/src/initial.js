/* exported initial */
// search and index each item of the array
// place new array items somewhere
// find last item index number
// extract array item with not equal to last index number
// move new array items into new array
// return new array

function initial(array) {
  var initialArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      initialArray.push(array[i]);
    }
  } return initialArray;
}

// searched and indexed each item of the array
// created a var to store new array items
// found index of last item in array using .length -1
// using if statement accepted items that were not equal to the last index number
// using push method moved items into new array
// returned new array
