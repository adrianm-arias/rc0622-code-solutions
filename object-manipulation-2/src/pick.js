/* exported pick */
// turn

function pick(source, keys) {
  var result = {};
  for (var prop of keys) {
    if (source[keys[prop]] !== undefined) {
      result[keys[prop]] = source[keys[prop]];
    }
  }
  return result;
}
