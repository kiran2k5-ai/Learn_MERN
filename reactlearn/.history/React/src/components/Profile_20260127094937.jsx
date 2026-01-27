import React from 'react'

const Profile = (name) => {
  return (
    <div>
      <ul>
        {name.map((namer)=>(
            <li>I am {namer}</li>
        ))}
      </ul>
    </div>
  )
}

export default Profile
