import React, { Component } from 'react';
import { Balence } from './balence';
import { IncomeExpenses } from './incomeExpenses';
import { TransactionList } from './transactionList';
import { AddTransactions } from './addTransactions';
import { GlobalProvider } from './context/globalState';

import '../styles/expenseTraker.css';

class ExpenseTraker extends Component {
  render() {
    return (
      <GlobalProvider>
        <Balence />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </GlobalProvider>
    );
  }
}

export default ExpenseTraker;
