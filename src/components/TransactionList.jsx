import React from 'react'
import Transaction from './Transaction'
import { randomUUID } from '../utils/helpers'
import { useApp } from '../state/context/Context'

export default function TransactionList() {
  const { transactions, setTransactions } = useApp();

  return (
    <div className='transaction-list d-flex flex-column gap-1'>
      {transactions
        .filter(transaction => transaction["Description"])
        .map(transaction => ({...transaction, id: randomUUID()}))
        .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
      }
    </div>
  )
}
