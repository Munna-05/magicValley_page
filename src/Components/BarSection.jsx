import React from 'react'

const BarSection = (props) => {
  return (
    <div className='md:h-20 bg-blue-600 flex md:justify-even shadow shadow-lg shadow-slate-500'>
     <div className='md:grid md:grid-cols-4 px-6 w-full py-3 my-auto'>
       <span className='text-white font-semibold'>{props.first}</span>
       <span className='text-white font-semibold'>{props.second}</span>
       <span className='text-white font-semibold'>{props.third}</span>
       <span className='text-white font-semibold'>{props.fourth}</span>
     </div>
    </div>
  )
}

export default BarSection