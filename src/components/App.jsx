import { useState } from 'react';
import FileProcessor from './FileProcessor';
import TransactionList from './TransactionList';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Users from './Users';
import LaunchSettings from './LaunchSettings';

function App() {
  const [transactions, setTransactions] = useState([]);
  
  const processorProps = { setTransactions };
  const transactionListProps = { transactions, setTransactions };
  
  return (
    <div className='m-3'>
      <div className='header'>
        <h1>Settle Up</h1>
        <p>Split finances made easy</p>
      </div>
      <Container fluid>
        <Row>
          <Col md='auto'>
            <FileProcessor {...processorProps} />
          </Col>
          <Col md={5}>
            <Users />
          </Col>
          <Col>
            <LaunchSettings />
          </Col>
        </Row>
      </Container>
      <TransactionList {...transactionListProps} />
    </div>
  )
}

export default App
