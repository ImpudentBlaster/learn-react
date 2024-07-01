import React from 'react'

function Reset({bill}) {
  return (
<div>
{
    bill > 0 ? <button>Reset</button> : ""
}
</div>
  )
}

export default Reset