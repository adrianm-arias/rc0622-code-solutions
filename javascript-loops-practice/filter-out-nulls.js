/* exported filterOutNulls */
function filterOutNulls(values) {
  for (var i = values.length - 1; i < values.length; i++) {
    var filter = values.filter(values => values !== null);
  }
  return filter;
}
