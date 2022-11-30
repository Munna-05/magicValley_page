import React from 'react'
import moment from 'moment'

const TransactionTable = ({details,name,category,Date,text}) => {
    
    return (
        <div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                {name} From
                            </th>
                            <th scope="col" className="py-3 px-6">
                                {name} Amount
                            </th>
                            <th scope="col" className="py-3 px-6">
                                {Date}
                            </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                       {details.map((result)=>{
                        return(
                            <>
                             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {result.text}
                            </th>
                            <td className={`py-4 px-6 ${text}`}>
                                {result.amount}
                            </td>
                            <td className="py-4 px-6">
                                {moment(result.createdAt).format('lll')}
                            </td>
                           
                        </tr>
                            </>
                        )
                       })}
                     
                    </tbody>
                </table>
            </div>
           
        </div>
    )
}

export default TransactionTable