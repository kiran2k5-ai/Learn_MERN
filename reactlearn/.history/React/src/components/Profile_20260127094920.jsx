import React from 'react'

const Profile = (name) => {
  return (
    <div>
      <ul>
        {name.map((namer)=>(
            <li></li>
        ))}
      </ul>
    </div>
  )
}

export default Profile
