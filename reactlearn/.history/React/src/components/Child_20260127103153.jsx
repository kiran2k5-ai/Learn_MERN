import React from 'react'

const Child = ({send}) => {
  return (
    <button onClick={()=>send}>
        send Dataa
    </button>
  )
}

export default Child
