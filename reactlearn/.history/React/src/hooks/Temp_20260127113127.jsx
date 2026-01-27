import React, { useState } from 'react'

const  Temp= () => {
    const [count,setCount] = useState(0)
  return (
    <>
      <button onClick={()=>set}>count: </button>{count}

    </>
  )
}

export default Temp
