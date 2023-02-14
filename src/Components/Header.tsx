import Image from 'next/image'
import React from 'react'
import MEnu from '../assets/menu.png'
import Profile from '../assets/profile.png'
const Header = () => {
  return (
    <div className='bg-[#f8f9fb] flex justify-between items-center py-4 px-4'>
        <span>
          <Image width={50} height={50} src={MEnu} alt=''/>
        </span>
        <span>
          <Image width={50} height={50} src={Profile} alt=''/>
        </span>
    </div>
  )
}

export default Header