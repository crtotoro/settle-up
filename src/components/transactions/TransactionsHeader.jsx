import React from 'react'
import TransactionStats from './TransactionStats';

export default function TransactionsHeader({ category, transactions, isPrimary }) {
  return (
    <div className={`transactions-header ${!isPrimary ? category : ''}`}>
      {transactions.length ? (
        <>
          {isPrimary ? <h2>Transactions</h2> : <h4>{category} Transactions</h4>}
          <TransactionStats transactions={transactions} />
        </>
      ) : <p>Upload a statement to get started...</p>}
    </div>
  ) 
}
