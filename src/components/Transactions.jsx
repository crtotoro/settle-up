import React, { useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useApp } from '../state/context/Context'
import TransactionsHeader from './TransactionsHeader';
import TransactionList from './TransactionList';

export default function Transactions() {
  const { transactions, isLoading } = useApp();
  const [ isCategorized, setIsCategorized ] = useState(false);

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
              <TransactionList key='Verify' />
              <TransactionList key='Include' />
              <TransactionList key='Exclude' />
            </>}
        </>
      }
    </Container>
  )
}
