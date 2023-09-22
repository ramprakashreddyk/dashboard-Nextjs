"use client"
import React from 'react'
import { RxDashboard } from "react-icons/rx"
import { BsCartCheck } from "react-icons/bs"
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const Sidebar = () => {
    const router=useRouter();
    const pathName=usePathname();
    return (
        <div className='bg-black w-1/6 h-screen fixed top-0 left-0'>
            <h1 className='text-white text-3xl ml-6'>Analytics</h1>
            <div className='mt-6'>
                <Link href="/" className={`flex items-center gap-2 ml-2 mb-3 cursor-pointer ${pathName === '/' ? 'text-blue-500' : 'text-white'}`}>
                    <RxDashboard />
                    <p className='ml-2'>Dashboard</p>
                </Link>
                <Link href="/Products" className={`flex items-center gap-2 ml-2 mb-3 cursor-pointer ${pathName === '/Products' ? 'text-blue-500' : 'text-white'}`}>
                    <BsCartCheck />
                    <p className='ml-2'>Products</p>
                </Link>
                <Link href="/Visitors" className={`flex items-center gap-2 ml-2 mb-3 cursor-pointer ${pathName === '/Visitors' ? 'text-blue-500' : 'text-white'}`}>
                    <AiOutlineEyeInvisible />
                    <p className='ml-2'>Visitors</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
