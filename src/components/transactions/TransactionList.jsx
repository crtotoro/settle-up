import React from 'react'
import Transaction from './Transaction'
import TransactionsHeader from './TransactionsHeader'

export default function TransactionList({ transactions, category }) {

  return (
    <div className={`transaction-list ${category}-list d-flex flex-column gap-1`}>
      {transactions.length > 0 && <TransactionsHeader category={category} transactions={transactions} />}
      {transactions
        .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
      }
    </div>
  )
}
