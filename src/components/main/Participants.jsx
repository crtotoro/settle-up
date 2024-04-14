import React from 'react'
import { Col, Form, InputGroup, OverlayTrigger } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { useApp, handleFieldChange } from '../../state/context/Context'

export default function Participants() {
  const { participants, setParticipants } = useApp();



  return (
    <Form.Group id='participants-form' className='py-3'>
      <Form.Label><b>Step 2.</b> Who is splitting the expenses?</Form.Label>
      <div className='participants d-flex gap-2'>
        <InputGroup id='participant1' label='Primary'>
          <InputGroup.Text>P1</InputGroup.Text>
          <Form.Control type='text' name='p1' value={participants.p1} onChange={(e) => handleFieldChange(e, setParticipants)} placeholder='No name entered'/>
        </InputGroup>
        <InputGroup id='participant2' label='Secondary'>
          <InputGroup.Text>P2</InputGroup.Text>
          <Form.Control type='text' name='p2' value={participants.p2} onChange={(e) => handleFieldChange(e, setParticipants)} placeholder='No name entered' />
        </InputGroup>
      </div>
    </Form.Group>
  )
}
