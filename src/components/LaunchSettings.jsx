import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import SettingsDrawer from './SettingsDrawer';

export default function LaunchSettings() {
  const [ showSettings, setShowSettings ] = useState(false);
  const handleShowSettings = () => setShowSettings(true);
  const handleHideSettings = () => setShowSettings(false);
  const settingsProps = { showSettings, handleHideSettings };

  return (
    <Form.Group className='py-3 d-flex flex-column' >
      <Form.Label><b>Step 3.</b> Customize to save time</Form.Label>
      <Button variant='outline-secondary' onClick={handleShowSettings}>Transaction Settings</Button>
      <SettingsDrawer {...settingsProps} />
    </Form.Group>
  )
}
