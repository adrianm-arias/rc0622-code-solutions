/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x, y) {
    return x * x;
  },
  sumAll: function (numbers) {
    var finalCount = 0;
    for (var i = 0; i < numbers.length; i++) {
      finalCount += numbers[i];
    }
    return finalCount;
  },
  getAverage: function (numbers) {
    var finalCount = 0;
    for (var i = 0; i < numbers.length; i++) {
      finalCount += numbers[i];
    }
    var Average = finalCount / numbers.length;
    return Average;
  }
};
