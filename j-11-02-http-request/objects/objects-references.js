const myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0,
};

const addExpense = function(account, amount) {
  account.expenses += amount;
};

const addIncome = function(account, income) {
  account.income += income;
};

const resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

const getAccountSummary = function(account) {
  const balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
