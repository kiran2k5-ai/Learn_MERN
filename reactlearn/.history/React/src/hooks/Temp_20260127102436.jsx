import React, { useState } from 'react'

const  Temp= () => {
    const [count,setCount] = useState(0)
  return (
    <>
      <h1>count: {count}</h1>
    </>
  )
}

export default Temp
