import React from 'react'
import img from '../../public/hero.svg'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home' className='border-b-[1px] border-gray-600'>
      <div className="h-screen py-28 px-5 container mx-auto flex flex-col lg:flex-row-reverse items-center justify-around gap-y-10">
        <Image
        className='w-[100%] sm:w-[500px]'
          src={img}
          alt='Karim'
          width={500}
          height={400}
        />
        <div className="gap-5 flex flex-col">
          <span className="text-sm font-medium bg-main w-fit px-2 py-[2px] rounded-sm">Front-End Developer</span>
          <div className="text-right">
            <h2 className='text-2xl md:text-4xl lg:text-6xl text-left'>Talk is sheap. <br /> Show me the <span className='text-main font-medium head-underline'>&#60;/Code&#62;</span></h2>
            <span className='italic text-sm text-gray-400'>~ Linus Torvalds</span>
          </div>
          <p className='text-sm w-[80%] md:text-xl text-gray-300'>A Great Design Needs  Great Devloper To Execute It.</p>
          <Link className='flex items-center gap-x-2 border-[1px] border-white duration-300 hover:bg-white hover:text-black w-fit px-5 py-2 rounded font-medium' href='https://github.com/Karem-Mohamed-Dev' target='_blank'><BsGithub className='text-xl' /> Check Me</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero