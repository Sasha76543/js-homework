'use strict'

let account = {
    balance: 0,
    transactions: [],
  
    addTransaction: function(amount, type) {
      this.transactions.push({ amount: amount, type: type });
    },
  
    getBalance: function() {
      let balance = 0;
      for (let transaction of this.transactions) {
        if (transaction.type === 'credit') {
          balance += transaction.amount;
        } else if (transaction.type === 'debit') {
          balance -= transaction.amount;
        }
      }
      this.balance = balance;
      return balance;
    },
  
    getTransactionHistory: function() {
      return this.transactions;
    }
  };
  
  account.addTransaction(100, 'credit');
  account.addTransaction(50, 'debit'); 
  account.addTransaction(200, 'credit');
  
  console.log("Поточний баланс:", account.getBalance()); 
  console.log("Історія транзакцій:", account.getTransactionHistory()); 
  