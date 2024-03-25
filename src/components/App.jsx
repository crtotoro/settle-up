import { useState } from 'react';
import FileProcessor from './FileProcessor';
import TransactionList from './TransactionList';
import Settings from './Settings';
import { Button } from 'react-bootstrap';

function App() {
  /* Data State */
  const [transactions, setTransactions] = useState([]);
  
  /* UI State */
  const [ showSettings, setShowSettings ] = useState(false);

  /* UI State Handlers */
  const handleShowSettings = () => setShowSettings(true);
  const handleHideSettings = () => setShowSettings(false);

  /* Props */
  const processorProps = { setTransactions };
  const transactionListProps = { transactions, setTransactions };
  const settingsProps = { showSettings, handleHideSettings };
  
  return (
    <div className='m-3'>
      <div className='header'>
        <h1>Settle Up</h1>
        <p>Split finances made easy</p>
        <Button onClick={handleShowSettings}>Transaction Settings</Button>
      </div>
      <div className='controls d-flex gap-3'>
        <FileProcessor {...processorProps} />
        <Settings {...settingsProps} />
      </div>
      <TransactionList {...transactionListProps} />
    </div>
  )
}

export default App
