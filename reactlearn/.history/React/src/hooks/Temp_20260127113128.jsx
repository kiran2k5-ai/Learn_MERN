import React, { useState } from 'react'

const  Temp= () => {
    const [count,setCount] = useState(0)
  return (
    <>
      <button onClick={()=>setCount}>count: </button>{count}

    </>
  )
}

export default Temp
