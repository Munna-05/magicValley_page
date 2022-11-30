import React from 'react'
import NewNav from '../../Components/NewNav'
import { useState } from 'react'

const AdminNav = () => {
  const [isAdmin,setisAdmin] = useState(false)
  
  

  return (
    <div>
         <NewNav logo='Admin' admin={true} one='Home' two='About' three='Booking' four='Contacts' five='Events' />

       </div>
  )
}

export default AdminNav