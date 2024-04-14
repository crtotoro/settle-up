import React from 'react'
import Matcher from './Matcher'

export default function MatcherList({ type, matchers, matcherDispatch }) {
  return (
    <div className='matcher-list'>
      {Array.isArray(matchers) && matchers.map(matcher => <Matcher key={matcher.id} type={type} matcher={matcher} matcherDispatch={matcherDispatch} />)}
    </div>
  )
}
