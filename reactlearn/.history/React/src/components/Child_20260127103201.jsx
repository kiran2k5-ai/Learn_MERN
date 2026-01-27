import React from 'react'

const Child = ({send}) => {
  return (
    <button onClick={()=>send()}>
        send Data
    </button>
  )
}

export default Child
