import React from 'react'
import { useApp } from '../../state/context/Context'
import { startDateReducer, endDateReducer, totalAmountReducer } from '../../utils/helpers';

export default function TransactionsHeader() {
  const { transactions } = useApp();

  return (
    <>
      {transactions.length ? (
        <>
          <h2>Transactions</h2>
          <p className='transaction-stats d-flex gap-3'>
            <span><strong>Count:</strong> {transactions.length}</span>
            <span><strong>Total:</strong> {transactions.reduce(totalAmountReducer, 0).toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
            <span><strong>Date Range:</strong> {`${transactions.reduce(startDateReducer, '')} - ${transactions.reduce(endDateReducer, '')}`} </span>
          </p>
        </>
      ) : 'Upload a statement to get started...'}
    </>
  )
}
