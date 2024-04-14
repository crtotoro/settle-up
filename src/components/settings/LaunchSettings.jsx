import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import SettingsDrawer from './SettingsDrawer';
import { useApp } from '../../state/context/Context';

export default function LaunchSettings() {
  const { transactions, transactionDispatch, textMatchers, minAmount } = useApp();
  const [ showSettings, setShowSettings ] = useState(false);
  const handleShowSettings = () => setShowSettings(true);
  const handleHideSettings = () => {
    setShowSettings(false)
    transactionDispatch({ type: 'APPLY_NEW_FILTERS', payload: {
      transactions,
      context: { textMatchers, minAmount } 
    }});
  };
  const settingsProps = { showSettings, handleHideSettings };

  return (
    <Form.Group className='py-3 d-flex flex-column' >
      <Form.Label><b>Step 3.</b> Customize to save time</Form.Label>
      <Button variant='outline-secondary' onClick={handleShowSettings}>Transaction Settings</Button>
      <SettingsDrawer {...settingsProps} />
    </Form.Group>
  )
}
