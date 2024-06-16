import React from 'react'
import { useApp } from '../../state/context/Context'
import { startDateReducer, endDateReducer, totalAmountReducer } from '../../utils/helpers';
import TransactionStats from './TransactionStats';

export default function TransactionsHeader() {
  const { transactions } = useApp();

  return (
    <>
      {transactions.length ? (
        <>
          <h2>Transactions</h2>
          <TransactionStats transactions={transactions} />
        </>
      ) : 'Upload a statement to get started...'}
    </>
  )
}
