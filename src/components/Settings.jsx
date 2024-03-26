import React, { useState, useEffect, useReducer } from 'react'
import { Accordion, AccordionBody, FloatingLabel, Form, InputGroup, Offcanvas, Stack } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import matcherReducer from '../state/reducers/matcherReducer.js';
import { initMatchers } from '../state/init/initMatchers.js';
import TextMatcher from './TextMatcher.jsx';

export default function Settings({ showSettings, handleHideSettings }) {
  /* Data State */
  const [ textMatchers, matcherDispatch ] = useReducer(matcherReducer, initMatchers);
  const [ dates, setDates ] = useState({ start: '', end: '' });

  /* Data State Handlers */
  const handleDateChange = e => setDates(currentDates => { 
    return { ...currentDates, [e.target.name]: e.target.value }
  });

  /* Tooltips*/
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  
  return (
    <Offcanvas show={showSettings} onHide={handleHideSettings} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Transaction Settings</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form className='settings d-flex flex-column align-items-start gap-2'>
          <div className='settings-group p-2 row'>
            <Form.Label>Date Range</Form.Label>
            <Form.Control id="start-date" className='col mx-2' type="date" value={dates.start} name="start" onChange={handleDateChange} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Start Date"/>
            <Form.Control id="end-date" className='col mx-2' type="date" value={dates.end} name="end" onChange={handleDateChange} data-bs-toggle="tooltip" data-bs-placement="bottom" title="End Date"/>
          </div>
          <div className='settings-group p-2 row'>
            <Form.Label>Transaction Matchers</Form.Label>
            {/* <Form.Group id="matchers" className='row' > */}
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
            {/* </Form.Group> */}
          </div>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
/* Todo
 * - Settings Layout
 *   - Default payor toggle -> primary or secondary
 *   - Default resolution -> split vs 100% owed
 */