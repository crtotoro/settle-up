import React from 'react'
import { FloatingLabel, Form, InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'

export default function Users() {
  return (
    <Form.Group className='participants-form'>
      <Form.Label><b>Step 2.</b> Who is splitting the expenses?</Form.Label>
      <div className='participants d-flex gap-2'>
        <InputGroup id='participant1' label='Primary'>
          <InputGroup.Text>P1</InputGroup.Text>
          <Form.Control type='text' name='participant1' placeholder='No name entered'/>
        </InputGroup>
        <InputGroup id='participant2' label='Secondary'>
          <InputGroup.Text>P2</InputGroup.Text>
          <Form.Control type='text' name='participant2' placeholder='No name entered' />
        </InputGroup>
      </div>
    </Form.Group>
  )
}
