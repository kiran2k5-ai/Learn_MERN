import React from 'react'

const Child = ({send}) => {
  return (
    <button onClick={()=>send("hell")}>
        send Data
    </button>
  )
}

export default Child
