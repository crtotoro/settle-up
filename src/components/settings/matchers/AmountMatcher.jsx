import React from 'react'
import { FloatingLabel, Form, InputGroup } from 'react-bootstrap'
import { useApp } from '../../../state/context/Context'

export default function AmountMatcher() {
  const { minAmount, setMinAmount } = useApp();

  return (
    <Form.Group className='col-12 mb-2'>
      <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <FloatingLabel controlId='verify-amount-matcher' label='Verify minimum amount'>
          <Form.Control type="number" name="verify-amount" value={minAmount} onChange={(e) => setMinAmount(e.target.value)} min='0' step='5' placeholder='Amount...'/>
        </FloatingLabel>
      </InputGroup>
    </Form.Group>
  )
}
