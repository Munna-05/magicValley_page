import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center'>
        <video className='rounded-lg mt-5 shadow shadow-lg shadow-slate-500 w-fit p-3 ' autoPlay="true" loop controls src="/about.mp4"></video>
    </div>
  )
}

export default About