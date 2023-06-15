import React from 'react'
import Login from './Login'
import Profile_content from './Profile_content'


export default function Profile() {
    let authenticated = localStorage.getItem("Authenticated")

  return (
    <div>
        {authenticated ? <Profile_content/> : <Login/>}
        
    </div>
  )
}