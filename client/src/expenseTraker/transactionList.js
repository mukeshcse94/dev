import React, { useContext } from 'react';
import { GlobalContext } from './context/globalState';
import { Transaction } from './transaction';

export const TransactionList = () => {
  const { transaction } = useContext(GlobalContext); //context.transaction
  // const context = useContext(GlobalContext); 

  console.log('access global state', transaction)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}
