/* exported defaults */
// check target parameter and source parameter
// if source prop is not included in target prop then add to target object
// if it is include do not add to target object

function defaults(target, source) {
  for (var prop in source) {
    if (prop in target) {
      continue;
    } else {
      target[prop] = source[prop];
    }
  }
}

// checked target parameter and source parameter using for in loop
// using if statement checked if source prop is not included in target prop then add to target object
// if it is include do not add to target object
