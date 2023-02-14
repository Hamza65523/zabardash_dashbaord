import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.jpeg'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()
    const handlerSUbmit = (e:any)=>{
        e.preventDefault
        router.push('/layout')
    }
  return (
    <div className='flex w-full h-screen'>
        <div className="min-w-[40%] bg-[#82b012]"></div>
        <div className="w-[60%] h-full flex justify-center  flex-col">
        <div className="w-[60%] mx-auto my-0">
            <Image src={Logo} width={200} height={200} alt=''/>
        <h1 className='font-bold text-2xl mb-2'>Welcome Back!</h1>
           <form onSubmit={handlerSUbmit}>
           <div className="flex flex-col gap-2">
                <label htmlFor="">Log in to continue</label>
                <input type="text"   className='border border-gray-300 py-3 rounded px-2' placeholder='Username' name="" id="" />
                <input type="password"   className='mt-1 border border-gray-300 py-3 rounded px-2' placeholder='Password' name="" id="" />
                <input type="submit" className='mt-2 uppercase cursor-pointer text-white bg-[#82b012] py-3 rounded' name="" id="" />
            </div>
           </form>
        </div>
        </div>
    </div>
  )
}

export default Login