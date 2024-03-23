import React, { useState, useEffect} from 'react'
import { Accordion, FloatingLabel, Form, InputGroup, Stack } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Settings() {
  const [ dates, setDates ] = useState({ start: '', end: '' });

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
    <div className='settings p-2 d-flex flex-column align-items-center gap-1'>
      <h5>Settings</h5>
      <Form className='d-flex flex-column'>
        <Form.Group id="date-range" className='d-flex gap-3' >
            <Form.Label>Range</Form.Label>
            <Form.Control id="start-date" type="date" value={dates.start} name="start" onChange={handleDateChange} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Start Date"/>
            <Form.Control id="end-date" type="date" value={dates.end} name="end" onChange={handleDateChange} data-bs-toggle="tooltip" data-bs-placement="bottom" title="End Date"/>
        </Form.Group>
      </Form>
    </div>
  )
}
/* Todo
 * - Settings Layout
 *   - Default payor toggle -> primary or secondary
 *   - Default resolution -> split vs 100% owed
 *   - Add/View Matchers
 *     - Include
 *     - Verify
 *     - Exclude
 */