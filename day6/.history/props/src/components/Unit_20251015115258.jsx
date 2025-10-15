import React from 'react'

const Unit = ({name,dept,skills}) => {
  return (
    <div>
      <h1>name is {name} </h1>
      <br />
      <h2>Department is {dept}</h2>
      <br />
      <h2>Skills are <ol></ol></h2>
    </div>
  )
}

export default Unit
