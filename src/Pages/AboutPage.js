import React from 'react'
import About from '../Components/About'
import Navbar from '../Components/Navbar'

const AboutPage = () => {
    return (
        <div>
            <Navbar logo='MagicValley' one='Home' two='About' three='Booking' four='Contacts' five='Events' />
            <About />
        </div>
    )
}

export default AboutPage