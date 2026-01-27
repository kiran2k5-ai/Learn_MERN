import React from 'react'

const Parent = () => {
    const getData = (data) => {
        console.log("Data Recieved from Child:",data)
    }
  return (
    <div>
        Child send = {}
    </div>
  )
}

export default Parent
