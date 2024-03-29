import { useState } from 'react';
import FileProcessor from './FileProcessor';
import TransactionList from './TransactionList';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Participants from './Participants';
import LaunchSettings from './LaunchSettings';
import { AppProvider } from '../state/context/Context';
import TransactionsHeader from './TransactionsHeader';

function App() {  
  return (
    <AppProvider>
      <div className='m-3'>
        <div className='header'>
          <h1>Settle Up</h1>
          <p>Split finances made easy</p>
        </div>
        <Container fluid className='inputs-container'>
          <Row>
            <Col lg={4}>
              <FileProcessor />
            </Col>
            <Col lg={5}>
              <Participants />
            </Col>
            <Col lg={3}>
              <LaunchSettings />
            </Col>
          </Row>
        </Container>
        <Container fluid className='transactions-container'>
          <TransactionsHeader />
          <TransactionList />
        </Container>
      </div>
    </AppProvider>
  )
}

export default App

/*
 * TODO:
 *    - 
 *
 *
 *
 *
 */