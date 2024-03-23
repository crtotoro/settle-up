import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

export default function Users() {
  return (
    <Form.Group className='users d-flex gap-3'>
      <FloatingLabel controlId='participant1' label='Primary' className='mb-3'>
        <Form.Control type='text' name='participant1' placeholder='Enter a name...'/>
      </FloatingLabel>
      <FloatingLabel controlId='participant2' label='Secondary' className='mb-3'>
        <Form.Control type='text' name='participant2' placeholder='Enter a name...'/>
      </FloatingLabel>
    </Form.Group>
  )
}
