import React, { useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useApp } from '../../state/context/Context'
import TransactionsHeader from './TransactionsHeader';
import TransactionList from './TransactionList';

export default function Transactions() {
  const { transactions, isLoading } = useApp();
  const [ isCategorized, setIsCategorized ] = useState(true);

  return (
    <Container fluid className='transactions-container'>
      {isLoading 
      ? <Spinner animation='border' role='status' className='loading'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner> 
      : <>
          <TransactionsHeader />
          {!isCategorized
          ? <TransactionList transactions={transactions} category={'All'} />
          : <>
              <TransactionList key='verify' category='Verify' transactions={transactions.filter(transaction => transaction.status === 'verify')} />
              <TransactionList key='include' category='Include' transactions={transactions.filter(transaction => transaction.status === 'include')} />
              <TransactionList key='exclude' category='Exclude' transactions={transactions.filter(transaction => transaction.status === 'exclude')} />
              <TransactionList key='other' category='All Other' transactions={transactions.filter(transaction => transaction.status === 'other')} />
            </>}
        </>
      }
    </Container>
  )
}
