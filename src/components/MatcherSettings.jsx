import React from 'react'
import { FloatingLabel, Form, InputGroup } from 'react-bootstrap'
import TextMatcher from './TextMatcher'
import { useApp } from '../state/context/Context'

export default function MatcherSettings() {
  const { textMatchers } = useApp();

  return (
    <div id='matchers' className='settings-group p-2 row'>
      <Form.Label>Transaction Matchers</Form.Label>
      {Object.keys(textMatchers).map(key => 
        <TextMatcher 
          key={textMatchers[key].type} 
          type={textMatchers[key].type} 
          matchers={textMatchers[key].matchers}
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
  )
}
