import { useState } from 'react';
import FileProcessor from './FileProcessor';
import TransactionList from './TransactionList';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Users from './Users';
import LaunchSettings from './LaunchSettings';
import { AppProvider } from '../state/context/Context';

function App() {  
  return (
    <AppProvider>
      <div className='m-3'>
        <div className='header'>
          <h1>Settle Up</h1>
          <p>Split finances made easy</p>
        </div>
        <Container fluid>
          <Row>
            <Col md='auto'>
              <FileProcessor />
            </Col>
            <Col md={5}>
              <Users />
            </Col>
            <Col>
              <LaunchSettings />
            </Col>
          </Row>
        </Container>
        <TransactionList />
      </div>
    </AppProvider>
  )
}

export default App

/*
 * TODO:
 *    - Continue to move state into useContext
 *      - participants and remaining settings
 *
 *
 *
 *
 */