import React from 'react';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useApp } from '../../state/context/Context';

export default function Transaction({ transaction }) {
  const { transactionDispatch } = useApp();

  const handleStatusChange = (newStatus) => {
    transactionDispatch({
      type: 'UPDATE_SINGLE_TRANSACTION',
      payload: {
        id: transaction.id,
        property: 'status',
        value: newStatus,
        override: true
      }
    });
  };

  return (
    <div id={transaction.id} className='transaction d-flex justify-content-between p-2'>
      <div className='d-flex gap-3 p-1'>
        <span className='transaction-date'>{transaction["Post Date"]}</span>
        <span className='transaction-description'>{transaction["Description"].replace("&amp;", '')}</span>
        <span className='transaction-amount'>Amount: {(parseFloat(transaction["Amount"])).toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
        <span className='transaction-payor'>Payor: {transaction["payor"]}</span>
      </div>

      <Dropdown as={ButtonGroup} className="transaction-actions">
        <Dropdown.Toggle variant="outline-secondary" size="sm">
          Move to
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item 
            active={transaction.status === 'include'}
            onClick={() => handleStatusChange('include')}>
            Include
          </Dropdown.Item>
          <Dropdown.Item 
            active={transaction.status === 'exclude'}
            onClick={() => handleStatusChange('exclude')}>
            Exclude
          </Dropdown.Item>
          <Dropdown.Item 
            active={transaction.status === 'verify'}
            onClick={() => handleStatusChange('verify')}>
            Verify
          </Dropdown.Item>
          <Dropdown.Item 
            active={transaction.status === 'other'}
            onClick={() => handleStatusChange('other')}>
            Other
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
