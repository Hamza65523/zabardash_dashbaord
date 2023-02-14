import Image from 'next/image'
import React from 'react'
import Logo from '../assets/logo.jpeg'
import Person from '../assets/withoutcolor.png'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Sidebar = () => {
  return (
    <div className='w-[400px] px-4 py-4'>
        <div className="">
            <Image src={Logo} width={200} height={200} alt="" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <h1 className='py-2 px-4 cursor-pointer flex gap-2 hover:text-[#9eac71] rounded-md hover:bg-[#ebf5d0]'>
              <DashboardIcon style={{ color: "#9cb651" }}/>
              Dashboard</h1>
            <h1 className='py-2 px-4 cursor-pointer flex gap-2 hover:text-[#9eac71] rounded-md hover:bg-[#ebf5d0]'>
              <GroupAddIcon style={{ color: "#9cb651" }}/>
              Customoers</h1>
            <h1 className='py-2 px-4 cursor-pointer flex gap-2 hover:text-[#9eac71] rounded-md hover:bg-[#ebf5d0]'>
              <StorefrontIcon style={{ color: "#9cb651" }}/>
              Products</h1>
            <h1 className='py-2 px-4 cursor-pointer flex gap-2 hover:text-[#9eac71] rounded-md hover:bg-[#ebf5d0]'>
              <ShoppingBagIcon style={{ color: "#9cb651" }}/>
              Orders</h1>
        </div>
    </div>
  )
}

export default Sidebar