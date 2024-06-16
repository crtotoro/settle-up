import React from 'react'
import TransactionStats from './TransactionStats'

export default function TransactionsSubHeader({ category, transactions }) {
  return (
    <>
      <h5>{category} Transactions</h5>
      <TransactionStats transactions={transactions} />
    </>
  )
}
