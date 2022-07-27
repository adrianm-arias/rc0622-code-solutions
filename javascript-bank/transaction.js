/* exported Transaction */

function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}

Transaction.prototype.type = function () {
  var type = this.type;
  return type;
};

Transaction.prototype.amount = function () {
  var amount = this.amount;
  return amount;
};
