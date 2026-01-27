import React from 'react'
import 
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
