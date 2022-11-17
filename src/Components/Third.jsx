import React from 'react'

const Third = (props) => {
    return (
        <div className='my-10'>
            <div className="md:flex md:justify-center">
                <div></div>
                <div className='my-auto mx-10'>
                    <img className='' src="/tree.png" alt="" />
                </div>
                <div className='my-auto mx-10'>

                    <label className='font-bold text-left flex w-80 leading-10 capitalize mx-auto' style={{ fontSize: '2vw' }} htmlFor="">{props.main}</label>
                    <p className='flex text-sm text-left my-3 w-80 mx-auto'> minima asperiores autem doloremque voluptatem, a, doloribus architecto dolorem natus impedit. Nostrum sapiente saepe incidunt praesentium.</p>
                   <button className='flex bg-slate-800 hover:bg-transparent border-2 hover:text-slate-800 border-slate-800 text-white px-4 rounded-full py-1'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Third