import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import moment from 'moment'
import TransactionTable from './TransactionTable';
const AccountsDetails = () => {

    const [bg, setBg] = useState('')
    const [profit, setProfit] = useState(0)
    const [expenseAmount, setExpenseAmount] = useState(0)
    const [expenseFrom, setExpenseFrom] = useState('')
    const [incomeAmount, setIncomeAmount] = useState(0)
    const [allIncome, setAllIncome] = useState([])
    const [allExpense, setAllExpense] = useState([])
    const [incomeFrom, setIncomeFrom] = useState('')
    const [alltransactions, setAllTransactions] = useState([])

    useEffect(() => {

        axios.get('http://localhost:5000/admin/get_income').then((res) => {
            setAllIncome(res.data)

        }).then(() => {

            axios.get('http://localhost:5000/admin/get_expense').then((res) => {
                setAllExpense(res.data)
                console.table(allIncome, allExpense)

            })
        })

        setProfit(total_income - total_expense)

        if (profit > 0) {

            setBg('bg-green-500')
        } else if (profit === 0) {

            setBg('bg-slate-400')
        } else {
            setBg('bg-red-400')

        }

    }, [ incomeAmount, expenseAmount,profit,expenseFrom,incomeFrom ])
  
    // const total_income = allIncome.map(())
    let total_income = 0;

    allIncome.forEach(element => {
      total_income += element.amount;
    });
    
    console.log(total_income);

    let total_expense = 0;

    allExpense.forEach(element => {
      total_expense += element.amount;
    });
    
    console.log(total_expense);
    
    
     
    const Expense_Data = {
        text: expenseFrom,
        amount: expenseAmount
    }
    const Income_Data = {
        text: incomeFrom,
        amount: incomeAmount

    }
    const submit_income = () => {
        axios.post('http://localhost:5000/admin/add_income', Income_Data).then(() => {

            toast.success('Income Updated', { autoClose: 500 })
        })

        setIncomeAmount(0)
        setIncomeFrom('')
    }
    const submit_expense = () => {
        axios.post('http://localhost:5000/admin/add_expense', Expense_Data).then(() => {

            toast.success('Expense Updated', { autoClose: 500 })
        })



        setExpenseAmount(0)
        setExpenseFrom('')
    }
    return (
        <div className=' mt-16'>
            <ToastContainer />
            <div className='flex justify-center'>
                <div className='bg-slate-900 transition duration-500 hover:bg-black rounded-lg shadow mx-8 shadow shadow-md border-8 border-white '>

                    <div className='w-3/4 mx-auto mt-16 flex justify-center ' >
                        <div className='mx-5  p-1 shadow shadow-md rounded-lg shadow-slate-900 bg-green-700 w-60'>
                            <p className='my-3 font-bold  bg-slate-100 w-fit mx-auto px-4 rounded-md text-slate-700' >Income </p>
                            <p className='my-3 font-bold mx-8 text-slate-100 ' >{total_income}/- </p>
                        </div>
                        <div className='mx-5  p-1 shadow shadow-md rounded-lg shadow-slate-900 bg-red-700 w-60'>
                            <p className='my-3 font-bold  bg-slate-100 w-fit mx-auto px-4 rounded-md text-slate-700' >Expense </p>
                            <p className='my-3 font-bold mx-8 text-slate-100' >{total_expense}/- </p>
                        </div>
                    </div>
                    <div className={`mt-5 ${bg} rounded-lg  w-2/4 py-2 mx-auto`}>
                        <span className='my-3 font-bold  mx-8 text-slate-100'><span className='mx-4'>Balance</span>  {profit}/-</span>
                    </div>
                    <div className='mt-5 mb-16 w-3/4 mx-auto flex justify-center'>

                        <div className='mt-5'>
                            {/* <div className='fle'><label className='' htmlFor="">Enter Expenses</label><br /></div> */}
                            <input value={incomeFrom} onChange={(e) => setIncomeFrom(e.target.value)} type="text" className='px-2 border-r border-slate-400 rounded-l shadow shadow-lg text-sm ' placeholder='Income From' style={{ height: '3vh' }} name="" id="" />
                            <input value={incomeAmount === 0 ? "" : incomeAmount} onChange={(e) => setIncomeAmount(e.target.value)} type="number" className='px-2 shadow shadow-lg text-sm ' placeholder='Income Amount' style={{ height: '3vh' }} name="" id="" />
                            <button type='submit' onClick={submit_income} className='bg-slate-500 px-2 text-white rounded-r shadow shadow-lg text-sm' style={{ height: '3vh' }}>Submit</button> <br />

                            <input value={expenseFrom} onChange={(e) => setExpenseFrom(e.target.value)} type="text" className='px-2 border-r border-slate-400  mt-2 border-slate-5 rounded-l shadow shadow-lg text-sm ' placeholder='Expense From' style={{ height: '3vh' }} name="" id="" />
                            <input value={expenseAmount === 0 ? '' : expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} type="number" className='px-2 shadow shadow-lg text-sm ' placeholder='Expense Amount' style={{ height: '3vh' }} name="" id="" />
                            <button type='submit' onClick={submit_expense} className='bg-slate-500 px-2 text-white rounded-r shadow shadow-lg text-sm' style={{ height: '3vh' }}>Submit</button> <br />


                        </div>
                    </div>

                </div>
            </div>


            <div className=' flex justify-center mx-auto mt-10'>
                <div className='mx-3'><TransactionTable text='text-green-300' name='Income' category='Amount' Date='Date' details={allIncome} /></div>
                <div className='mx-3'><TransactionTable text='text-red-400' name='Expense' category='Amount' Date='Date' details={allExpense} /></div>


                {/* <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Income From
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Income Amount
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Date
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {alltransactions.map((result) => {
                                return (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {result.text}
                                        </th>
                                        <td class="py-4 px-6">
                                            {result.amount}
                                        </td>
                                        <td class="py-4 px-6">
                                            {moment(result.createdAt).format('lll')}
                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div> */}
            </div>

        </div>
    )
}

export default AccountsDetails