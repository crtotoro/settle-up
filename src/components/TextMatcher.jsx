import React from 'react'
import { Accordion, FloatingLabel, InputGroup, Form, Button } from 'react-bootstrap'
import { toTitle } from '../utils/helpers'
import MatcherList from './MatcherList';

export default function TextMatcher({ type, matchers, matcherDispatch }) {
  const matcherListProps = { type, matchers, matcherDispatch };
  const titleType = toTitle(type);
  // matchType: "include", "exclude", or "verify"
 
  return (
    <div className='text-matcher col'>
      <InputGroup>
        <FloatingLabel controlId={type + '-matcher'} label='Contains text'>
          <Form.Control type="text" name={type} placeholder='Contains text'/>
        </FloatingLabel>
        <Button variant='outline-secondary'>Add</Button>
      </InputGroup>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>{titleType + ':'}</Accordion.Header>
          <Accordion.Body>
            <MatcherList {...matcherListProps} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
