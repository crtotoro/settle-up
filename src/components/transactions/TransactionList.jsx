import React from 'react'
import Transaction from './Transaction'
import TransactionsSubHeader from './TransactionsSubHeader'

export default function TransactionList({ transactions, category }) {

  return (
    <div className='transaction-list d-flex flex-column gap-1'>
      {transactions.length > 0 && <TransactionsSubHeader category={category} transactions={transactions} />}
      {transactions
        .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
      }
    </div>
  )
}
