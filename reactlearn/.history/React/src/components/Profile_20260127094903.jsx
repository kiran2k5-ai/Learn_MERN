import React from 'react'

const Profile = (name) => {
  return (
    <div>
      <ul>
        {name.map((name))}
      </ul>
    </div>
  )
}

export default Profile
