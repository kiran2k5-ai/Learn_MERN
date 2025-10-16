import React from 'react'

const state = () => {
    const [count , setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count)}>Increase</button>
    </div>
  )
}

export default state
