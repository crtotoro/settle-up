import { useState } from 'react';
import UploadFile from './UploadFile';
import TransactionList from './TransactionList';
import { Col, Container, Row, Spinner, Stack } from 'react-bootstrap';
import Participants from './Participants';
import LaunchSettings from './LaunchSettings';
import { AppProvider } from '../state/context/Context';
import TransactionsHeader from './TransactionsHeader';
import TransactionsDashboard from './TransactionsDashboard';

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
              <UploadFile />
            </Col>
            <Col lg={5}>
              <Participants />
            </Col>
            <Col lg={3}>
              <LaunchSettings />
            </Col>
          </Row>
        </Container>
        <TransactionsDashboard />
      </div>
    </AppProvider>
  )
}

export default App

/*
 * TODO:
 *    - (IN PROGRESS) Position loading spinner then remove setInterval from promise
 *    - Move init matchers into config file
 *    - Manual transaction entry
 *    - Render transaction list for each category: Verify, Included, Excluded 
 *    - Transaction controls:
 *      - Mass modify category
 *      - Mass modify payor
 *      - Mass modify split
 *      - Sorting
 * 
 * STRETCH:
 *    - Transaction drag and drop for re-order and re-categorize
 *      - Add manual order state to make changes persistent across sorts/filters
 *
 *
 */