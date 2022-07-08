/* exported filterOutStrings */
function filterOutStrings(values) {
  for (var i = values.length - 1; i < values.length; i++) {
    var filter = values.filter(Element => typeof Element !== 'string');
  }
  return filter;
}
