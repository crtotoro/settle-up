import React from 'react'
import { Form } from 'react-bootstrap'
import TextMatcher from './TextMatcher'
import { useApp } from '../state/context/Context'
import AmountMatcher from './AmountMatcher';

export default function MatcherSettings() {
  const { textMatchers } = useApp();

  return (
    <div id='matchers' className='settings-group p-2 row'>
      <Form.Label>Transaction Matchers</Form.Label>
      {Object.keys(textMatchers).map(type => 
        <TextMatcher 
          key={type} 
          type={type} 
          matchers={textMatchers[type]}
        />)}
      <AmountMatcher />
    </div>
  )
}
