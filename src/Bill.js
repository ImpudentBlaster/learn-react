import React from 'react'

function bill({bill , setBill}) {
  return (
    <>
    <span>How much was the bill?</span>
    <input value={bill} onChange={(event) => setBill(event.target.value)} type='number'></input>
    </>
  )
}

export default bill