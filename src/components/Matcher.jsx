import React from 'react'
import { CloseButton } from 'react-bootstrap'

export default function Matcher( { type, matcher, matcherDispatch }) {
  return (
    <div className='matcher d-flex justify-content-between'>
      <span>{matcher.text}</span>
      <CloseButton onClick={(e) => matcherDispatch({ type: `${type.toUpperCase()}_REMOVE`, payload: matcher.id })}/>
    </div>
  )
}
