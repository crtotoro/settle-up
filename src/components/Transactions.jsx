import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useApp } from '../state/context/Context'
import TransactionsHeader from './TransactionsHeader';
import TransactionList from './TransactionList';

export default function Transactions() {
  const { isLoading } = useApp();

  return (
    <Container fluid className='transactions-container'>
      {isLoading 
      ? <Spinner animation='border' role='status' className='loading'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner> 
      : <>
          <TransactionsHeader />
          <TransactionList />
        </>
      }
    </Container>
  )
}
