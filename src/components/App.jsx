import { useState } from 'react';
import FileProcessor from './FileProcessor';
import TransactionList from './TransactionList';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Participants from './Participants';
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
              <Participants />
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
 *    - Fix state in the useContext to split settings into individual parts or turn it into a single useState managing an object
 *        - consider useReducer for settings
 *
 *
 *
 *
 */