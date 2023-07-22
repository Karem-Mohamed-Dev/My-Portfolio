'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../public/logo-dark.svg'
import Image from 'next/image'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaXmark } from 'react-icons/fa6'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className='p-2 w-screen fixed top-0 left-0 border-b-[1px] border-gray-800 bg-[#151515]'>
            <div className="hidden container mx-auto lg:grid grid-cols-3 justify-items-center items-center">
                <ul className='gap-x-5 flex'>
                    <li><a className='font-medium cursor-pointer duration-300 hover:text-main' href='#home'>Home</a></li>
                    <li><a className='font-medium cursor-pointer duration-300 hover:text-main' href='#about'>About</a></li>
                    <li><a className='font-medium cursor-pointer duration-300 hover:text-main' href='#skills'>Skills</a></li>
                    <li><a className='font-medium cursor-pointer duration-300 hover:text-main' href='#projects'>Projects</a></li>
                </ul>
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    alt="Logo"
                />
                <div className="flex gap-6  items-center">
                    <Link href='https://www.linkedin.com/in/karem-mohamed-a789a6239/' target='_blank'>
                        <BsLinkedin className='text-2xl hover:text-blue-500 duration-300' />
                    </Link>
                    <Link href='https://github.com/Karem-Mohamed-Dev' target='_blank'>
                        <BsGithub className='text-2xl hover:text-slate-500 duration-300' />
                    </Link>
                    <a href='#contact' className='px-4 py-[5px] rounded border-[1px] border-white duration-300 hover:bg-white hover:text-black'>Contact Me</a>
                </div>
            </div>

            <div className='lg:hidden flex w-full justify-between items-center px-5'>
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    alt="Logo"
                />
                <div onClick={() => setShowMenu(true)} className='text-2xl'>
                    <HiMenuAlt3 />
                </div>
            </div>
            <div className={`absolute top-0 right-0 translate-x-${showMenu ? '0' : 'full'} duration-300 w-screen h-screen bg-white text-black flex flex-col items-center justify-evenly p-10`}>
                <div onClick={() => setShowMenu(false)} className='text-3xl'>
                    <FaXmark />
                </div>
                <ul className='gap-y-8 flex flex-col items-center text-2xl'>
                    <li><a onClick={() => setShowMenu(false)} className='font-medium cursor-pointer duration-300 hover:text-main' href='#home'>Home</a></li>
                    <li><a onClick={() => setShowMenu(false)} className='font-medium cursor-pointer duration-300 hover:text-main' href='#about'>About</a></li>
                    <li><a onClick={() => setShowMenu(false)} className='font-medium cursor-pointer duration-300 hover:text-main' href='#skills'>Skills</a></li>
                    <li><a onClick={() => setShowMenu(false)} className='font-medium cursor-pointer duration-300 hover:text-main' href='#projects'>Projects</a></li>
                </ul>
                <div className="flex gap-6  items-center">
                    <Link href='https://www.linkedin.com/in/karem-mohamed-a789a6239/' target='_blank'>
                        <BsLinkedin className='text-2xl hover:text-blue-500 duration-300' />
                    </Link>
                    <Link href='https://github.com/Karem-Mohamed-Dev' target='_blank'>
                        <BsGithub className='text-2xl hover:text-slate-500 duration-300' />
                    </Link>
                    <a href='#contact' className='px-4 py-[5px] rounded border-[1px] border-black duration-300 hover:bg-black hover:text-white'>Contact Me</a>
                </div>
            </div>
        </header>
    )
}

export default Header