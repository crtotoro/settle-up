import React from 'react'
import Transaction from './Transaction'
import { useApp } from '../state/context/Context'

export default function TransactionList() {
  const { transactions, setTransactions } = useApp();

  return (
    <div className='transaction-list d-flex flex-column gap-1'>
      {transactions
        .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
      }
    </div>
  )
}
