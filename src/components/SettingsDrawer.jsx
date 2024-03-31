import React, { useState, useReducer, useContext } from 'react'
import { FloatingLabel, Form, InputGroup, Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap'
import matcherReducer from '../state/reducers/matcherReducer.js';
import { initMatchers } from '../state/init/initMatchers.js';
import { renderTooltip } from '../utils/tooltip.jsx';
import { useApp } from '../state/context/Context.jsx';
import TextMatcher from './TextMatcher.jsx';
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
