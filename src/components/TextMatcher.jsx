import React, { useState } from 'react'
import { Accordion, FloatingLabel, InputGroup, Form, Button } from 'react-bootstrap'
import { toTitle } from '../utils/helpers'
import MatcherList from './MatcherList';
import { useApp } from '../state/context/Context';

export default function TextMatcher({ type, matchers }) {
  const { matcherDispatch } = useApp();
  const matcherListProps = { type, matchers, matcherDispatch };
  const titleType = toTitle(type);
  const [ newMatcherText, setNewMatcherText ] = useState('');
  const [ activeKey, setActiveKey ] = useState(null);
  const handleAddMatcher = () => {
    matcherDispatch({ type: `${type.toUpperCase()}_ADD`, payload: newMatcherText });
    setNewMatcherText('');
    setActiveKey('1');
  }
  const handleAccordionClick = key => setActiveKey(activeKey === key ? null : key);

  return (
    <div className='text-matcher col-12 mb-2'>
      <InputGroup className='add-matcher'>
        <FloatingLabel controlId={type + '-matcher'} label='Contains text'>
          <Form.Control type="text" name={type} value={newMatcherText} onChange={(e) => setNewMatcherText(e.target.value)} placeholder='Contains text'/>
        </FloatingLabel>
        <Button variant='outline-secondary' onClick={handleAddMatcher}>Add</Button>
      </InputGroup>
      <Accordion className='matcher-list-header' activeKey={activeKey} onSelect={handleAccordionClick}>
        <Accordion.Item eventKey='1'>
          <Accordion.Header className='p-0'>
            <div className='d-flex flex-column m-0'>
              <div>{titleType + ' transactions matching:'}</div>
              <Form.Text muted>{`(${matchers.length} applied)`}</Form.Text>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <MatcherList {...matcherListProps} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
