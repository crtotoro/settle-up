import React from 'react'

export default function Transaction({ id, transaction }) {

  return (
    <div id={id} className='transaction d-flex gap-3 p-2'>
      <span className='transaction-date'>{transaction["Post Date"]}</span>
      <span className='transaction-description'>{transaction["Description"].replace("&amp;", '')}</span>
      <span className='transaction-amount'>Amount: {(parseFloat(transaction["Amount"])).toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
      <span className='transaction-payor'>Payor: {transaction["payor"]}</span>
    </div>
  )
}
