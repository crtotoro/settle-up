import { useState } from 'react';
import FileProcessor from './FileProcessor';
import TransactionList from './TransactionList';
import Settings from './Settings';

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
      <div className='controls d-flex gap-3'>
        <FileProcessor {...processorProps}/>
        <Settings />
      </div>
      <TransactionList {...transactionListProps} />
    </div>
  )
}

export default App
