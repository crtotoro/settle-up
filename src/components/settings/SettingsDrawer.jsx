import React from 'react'
import { Form, Offcanvas } from 'react-bootstrap'
import SettlementSettings from './SettlementSettings.jsx';
import DateRangeSettings from './DateRangeSettings.jsx';
import MatcherSettings from './MatcherSettings.jsx';

export default function SettingsDrawer({ showSettings, handleHideSettings }) {
  return (
    <Offcanvas show={showSettings} onHide={handleHideSettings} placement='end' className='bg-gray'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Transaction Settings</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form className='settings d-flex flex-column align-items-start gap-2'>
          <DateRangeSettings />
          <MatcherSettings />
          <SettlementSettings />
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
