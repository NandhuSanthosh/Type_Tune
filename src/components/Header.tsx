"use client"
import React from 'react'
import { FaKeyboard } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Link from 'next/link';
import { IoMdExit } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    function handleLogout(){
        router.push('/auth')
    }
  return (
    <header className='w-full bg-black-lite pt-3'>
        <div className='flex justify-between items-center'>
            <Link href={"/"}> 
                <div className='flex gap-3 items-center'>
                        <FaKeyboard size={"35px"} color='orange'/>
                        <div>
                            <h1 className='text-3xl font-medium text-zinc-300'>typetune</h1>
                        </div>
                </div>
            </Link>

            <div className='flex gap-5'>
                <Link href={"/profile"}>
                    <div className='text-gray-500 hover:text-gray-200'>
                        <FaUser size={"20px"} />
                    </div>
                </Link>

                <button onClick={handleLogout} className='text-gray-500 hover:text-gray-200'>
                    <IoMdExit size={"23px"} />
                </button>
            </div>
        </div>

    </header>
  )
}

export default Header
