import React from 'react'
import Transaction from './Transaction'

export default function TransactionList({ transactions, category }) {

  return (
    <div className='transaction-list d-flex flex-column gap-1'>
      {transactions.length > 0 && <h5>{category} Transactions</h5>}
      {transactions
        .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
      }
    </div>
  )
}
