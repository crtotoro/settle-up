import React from 'react'
import { Form, OverlayTrigger } from 'react-bootstrap'
import { renderTooltip } from '../utils/tooltip';
import { useApp } from '../state/context/Context';

export default function DateRangeSettings() {
  const { dates, handleDateChange } = useApp();

  return (
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
  )
}
