import React from 'react'
import Transaction from './Transaction'
import { randomUUID, startDateReducer, endDateReducer } from '../utils/helpers'
import { useApp } from '../state/context/Context'

export default function TransactionList() {
  const { transactions, setTransactions } = useApp();

  return (
    <div className='transaction-list d-flex flex-column gap-1'>
      {transactions.length ? (
      <>
        <h2>Uploaded Transactions</h2>
        <p className='transaction-stats d-flex gap-3'>
          <span><strong>Count:</strong> {transactions.length}</span>
          <span><strong>Total:</strong> {transactions.reduce((total, transaction) => transaction["Amount"] ? total += (transaction["Amount"] * -1) : total += 0,0).toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
          <span><strong>Date Range:</strong> {`${transactions.reduce(startDateReducer, '')} - ${transactions.reduce(endDateReducer, '')}`} </span>
        </p>
      </>
      ) : 'Upload a statement to get started...'}
      {transactions
        .filter(transaction => transaction["Description"])
        .map(transaction => ({...transaction, id: randomUUID()}))
        .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
      }
    </div>
  )
}
