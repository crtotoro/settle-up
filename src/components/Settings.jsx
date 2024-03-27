import React, { useState, useReducer } from 'react'
import { FloatingLabel, Form, InputGroup, Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap'
import matcherReducer from '../state/reducers/matcherReducer.js';
import { initMatchers } from '../state/init/initMatchers.js';
import { renderTooltip } from '../utils/tooltip.jsx';
import TextMatcher from './TextMatcher.jsx';

export default function Settings({ showSettings, handleHideSettings }) {
  /* Data State */
  const [ textMatchers, matcherDispatch ] = useReducer(matcherReducer, initMatchers);
  const [ dates, setDates ] = useState({ start: '', end: '' });

  /* Data State Handlers */
  const handleDateChange = e => setDates(currentDates => { 
    return { ...currentDates, [e.target.name]: e.target.value }
  });
  
  return (
    <Offcanvas show={showSettings} onHide={handleHideSettings} placement='end' className='bg-gray'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Transaction Settings</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form className='settings d-flex flex-column align-items-start gap-2'>
          <div id='dates' className='settings-group p-2 row'>
            <Form.Group className='col-12 mb-2 '>
              <Form.Label>Date Range</Form.Label>
              <div className='d-flex gap-2'>
                <OverlayTrigger placement='left' overlay={(props) => renderTooltip(props, 'start-date-tip', 'Start Date')}>
                  <Form.Control id="start-date" type="date" value={dates.start} name="start" onChange={handleDateChange}/>
                </OverlayTrigger>
                <OverlayTrigger placement='top' overlay={(props) => renderTooltip(props, 'end-date-tip', 'End Date')}>
                  <Form.Control id="end-date" type="date" value={dates.end} name="end" onChange={handleDateChange}/>
                </OverlayTrigger>
              </div>
              <Form.Text muted>Exclude transactions outside this range</Form.Text>
            </Form.Group>
          </div>
          <div id='matchers' className='settings-group p-2 row'>
            <Form.Label>Transaction Matchers</Form.Label>
            {Object.keys(textMatchers).map(key => 
              <TextMatcher 
                key={textMatchers[key].type} 
                type={textMatchers[key].type} 
                matchers={textMatchers[key].matchers}
                matcherDispatch={matcherDispatch} 
              />)}
            <Form.Group className='col-12 mb-2'>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <FloatingLabel controlId='verify-amount-matcher' label='Verify minimum amount'>
                  <Form.Control type="number" name="verify-amount" min='0' step='5' placeholder='Amount...'/>
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
          </div>
          <div id='settlement' className='settings-group p-2 row'>
            <Form.Label>Settlement Assumptions</Form.Label>
            <Form.Group className='col-12 mb-2'>
              <FloatingLabel controlId='default-payor' label='Original payor'>
                <Form.Select>
                  <option value={1}>Participant1</option>
                  <option value={2}>Participant2</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className='col-12 mb-2'>
              <FloatingLabel controlId='default-settlement' label='How to split'>
                <Form.Select>
                  <option value={1}>50/50 Split</option>
                  <option value={2}>100% Repaid</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </div>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
