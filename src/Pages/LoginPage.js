import React from 'react'

import Login from '../Components/Login'
import Navbar from '../Components/Navbar'

const LoginPage = () => {
  return (
    <div>
        <Navbar logo='magicValley' loginpage={true}/>
        <Login/>
    </div>
  )
}

export default LoginPage