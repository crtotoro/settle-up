import React from 'react'
import { useApp } from '../state/context/Context'
import { startDateReducer, endDateReducer } from '../utils/helpers';

export default function TransactionsHeader() {
  const { transactions } = useApp();

  return (
    <>
      {transactions.length ? (
        <>
          <h2>Transactions</h2>
          <p className='transaction-stats d-flex gap-3'>
            <span><strong>Count:</strong> {transactions.length}</span>
            <span><strong>Total:</strong> {transactions.reduce((total, transaction) => transaction["Amount"] ? total += (transaction["Amount"] * -1) : total += 0,0).toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
            <span><strong>Date Range:</strong> {`${transactions.reduce(startDateReducer, '')} - ${transactions.reduce(endDateReducer, '')}`} </span>
          </p>
        </>
      ) : 'Upload a statement to get started...'}
    </>
  )
}
