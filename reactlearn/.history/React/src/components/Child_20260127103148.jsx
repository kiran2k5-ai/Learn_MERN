import React from 'react'

const Child = ({send}) => {
  return (
    <button onClick={()=>send}>
        send
    </button>
  )
}

export default Child
