import Image from 'next/image'
import React from 'react'
import Store from '../assets/store.jpeg'

const Dashboard = () => {
  return (
    <div className='bg-[#f8f9fb] h-screen w-full px-4 py-4'>
    <div className="flex gap-4 ">
    <div className="bg-white rounded-lg w-[25%] flex justify-between  items-center px-4 py-8 ">
        <div className="">
        <h1 className='text-xl font-bold'>2412</h1>
        <p className='text-[12px] text-gray-300 font-bold'>TOTAL STORE</p>
        </div>
        <div className="">
          <Image src={Store} width={50} height={20} alt=''/>
        </div>
      </div>
      <div className="bg-white rounded-lg w-[25%] flex justify-between  items-center px-4 py-8 ">
        <div className="">
        <h1 className='text-xl font-bold'>$7209</h1>
        <p className='text-[12px] text-gray-300 font-bold'>TOTAL REVENUE</p>
        </div>
        <div className="">
          <Image src={Store} width={50} height={20} alt=''/>
        </div>
      </div>
    <div className="bg-white rounded-lg w-[25%] flex justify-between  items-center px-4 py-8 ">
        <div className="">
        <h1 className='text-xl font-bold'>$7009</h1>
        <p className='text-[12px] text-gray-300 font-bold'>PRODUCT SOLD</p>
        </div>
        <div className="">
          <Image src={Store} width={50} height={20} alt=''/>
        </div>
      </div>
      <div className="bg-white rounded-lg w-[25%] flex justify-between  items-center px-4 py-8 ">
        <div className="">
        <h1 className='text-xl font-bold'>$3209</h1>
        <p className='text-[12px] text-gray-300 font-bold'>TOTAL REVENUE</p>
        </div>
        <div className="">
          <Image src={Store} width={50} height={20} alt=''/>
        </div>
      </div>
    </div>
    <div className="">
      <h1>Recent  Orders</h1>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Order</th>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Date</th>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Status</th>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-4 border-b border-gray-300'>#20972 Hassan Sattar</td>
            <td className='px-4 py-4 border-b border-gray-300'>2/2/2021</td>
            <td className='px-4 py-4 border-b border-gray-300 '><span className='bg-[#9eac71]  py-1 px-2 rounded-3xl'> Processing</span></td>
            <td className='px-4 py-4 border-b border-gray-300'>$ 150</td>
          </tr>
          <tr>
            <td className='px-4 py-4 border-b border-gray-300'>#20972 Hassan Sattar</td>
            <td className='px-4 py-4 border-b border-gray-300'>2/2/2021</td>
            <td className='px-4 py-4 border-b border-gray-300 '><span className='bg-[#9eac71]  py-1 px-2 rounded-3xl'> Processing</span></td>
            <td className='px-4 py-4 border-b border-gray-300'>$ 150</td>
          </tr>
          <tr>
            <td className='px-4 py-4 border-b border-gray-300'>#20972 Hassan Sattar</td>
            <td className='px-4 py-4 border-b border-gray-300'>2/2/2021</td>
            <td className='px-4 py-4 border-b border-gray-300 '><span className='bg-[#9eac71]  py-1 px-2 rounded-3xl'> Processing</span></td>
            <td className='px-4 py-4 border-b border-gray-300'>$ 150</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Dashboard