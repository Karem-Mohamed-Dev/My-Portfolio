import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo-dark.svg'
import Image from 'next/image'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Header = () => {
    return (
        <header className='p-2 w-screen fixed top-0 left-0 border-b-[1px] border-gray-800 bg-[#151515]'>
            <div className="container mx-auto grid grid-cols-3 justify-items-center items-center">
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
        </header>
    )
}

export default Header