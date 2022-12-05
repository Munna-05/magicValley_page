import moment from 'moment'
import React from 'react'

const All_bookingsTable = () => {
    return (
        <div>

            <div className="overflow-x-auto overflow-y-scroll w-2/3 mx-auto border-8 shadow shadow-slate-800 border-slate-200 mt-16 relative shadow-md sm:rounded-lg" style={{height:'auto',maxHeight:'60vh'}}>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg    font-semibold text-left text-gray-900 bg-white dark:text-green-500 dark:bg-gray-800">
                       Today : {moment(Date.now()).format('llll')}
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                    </caption>
                    <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='sticky top-0'>
                            <th scope="col" className="py-3 px-6">
                                Guest Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Address
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Number of People
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Check In
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Checkout
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="py-4 px-6">
                                Sliver
                            </td>
                            <td className="py-4 px-6">
                                Laptop
                            </td>
                            <td className="py-4 px-6">
                                Laptop
                            </td>
                            <td className="py-4 px-6">
                                $2999
                            </td>
                           
                        </tr>
                      
                       
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default All_bookingsTable