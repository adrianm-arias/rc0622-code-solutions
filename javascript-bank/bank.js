/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.nextAccountNumber = function () {
  var accountNumber = this.nextAccountNumber;
  return accountNumber;
};

Bank.prototype.accounts = function () {
  var accounts = this.accounts;
  return accounts;
};

Bank.prototype.openAccount = function (holder, balance) {
  if (Math.sign(balance) === 1 && Number.isInteger(balance) === true) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var bankAccounts = this.accounts;
  for (var i = 0; i < bankAccounts.length; i++) {
    if (bankAccounts[i].number === number) {
      return bankAccounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  var bankAccounts = this.accounts;
  for (var i = 0; i < bankAccounts.length; i++) {
    totalAssets += bankAccounts[i].getBalance();
  }
  return totalAssets;
};
