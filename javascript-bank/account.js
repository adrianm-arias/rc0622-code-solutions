/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.number = function () {
  var number = this.number;
  return number;
};

Account.prototype.holder = function () {
  var holder = this.holder;
  return holder;
};

Account.prototype.transactions = function () {
  var transactions = this.transactions;
  return transactions;
};

Account.prototype.deposit = function (amount) {
  if (Math.sign(amount) === 1 && Number.isInteger(amount) === true) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Math.sign(amount) === 1 && Number.isInteger(amount) === true) {
    var newWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  var transArr = this.transactions;
  for (var i = 0; i < transArr.length; i++) {
    if (transArr[i].type === 'deposit') {
      balance += transArr[i].amount;
    } else if (transArr[i].type === 'withdrawal') {
      balance -= transArr[i].amount;
    }
  }
  return balance;
};
