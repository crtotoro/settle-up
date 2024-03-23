import React from 'react'
import { Accordion, FloatingLabel, Form, InputGroup } from 'react-bootstrap'

export default function Settings() {
  return (
    <div className='settings'>
      <h5>Settings</h5>
      <Form className='d-flex gap-3'>
        <Form.Group>
          <FloatingLabel controlId='participant1' label='Primary' className='mb-3'>
            <Form.Control type='text' name='participant1' placeholder='Enter a name...'/>
          </FloatingLabel>
          <FloatingLabel controlId='participant2' label='Secondary' className='mb-3'>
            <Form.Control type='text' name='participant2' placeholder='Enter a name...'/>
          </FloatingLabel>
        </Form.Group>
      </Form>
    </div>
  )
}
