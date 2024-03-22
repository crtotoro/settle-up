import { useState } from 'react';
import FileProcessor from './FileProcessor';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);
  const processorProps = { setTransactions };
  const transactionListProps = { transactions, setTransactions };
  
  return (
    <div className='m-3'>
      <h1>Settle Up</h1>
      <p>Split finances made easy</p>
      <FileProcessor {...processorProps}/>
      <TransactionList {...transactionListProps} />
    </div>
  )
}

export default App
