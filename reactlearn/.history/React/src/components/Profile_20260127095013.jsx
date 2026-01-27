import React from 'react'

const Profile = ({name}) => {
  return (
    <div>
      <ul>
        {name.map((name)=>(
            <li>I am {name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Profile
