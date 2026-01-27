import React from 'react'
import chi
const Parent = () => {
    const getData = (data) => {
        console.log("Data Recieved from Child:",data)
    }
  return (
    <div>
        <Child send = {getData} />
    </div>
  )
}

export default Parent
