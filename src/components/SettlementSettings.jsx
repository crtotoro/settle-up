import React from 'react'
import { useApp } from '../state/context/Context'
import { FloatingLabel, Form } from 'react-bootstrap';

export default function SettlementSettings() {
  const { participants, defaultPayor, setDefaultPayor } = useApp();

  return (
    <div id='settlement-settings' className='settings-group p-2 row'>
      <Form.Label>Settlement Assumptions</Form.Label>
      <Form.Group className='col-12 mb-2'>
        <FloatingLabel controlId='default-payor' label='Original payor'>
          <Form.Select value={defaultPayor} onChange={(e) => setDefaultPayor(e.target.value)}>
            <option value='p1'>{participants.p1 ? participants.p1 : 'Participant 1'}</option>
            <option value='p2'>{participants.p2 ? participants.p2 : 'Participant 2'}</option>
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
  )
}
