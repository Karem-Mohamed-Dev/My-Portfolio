import Link from 'next/link'
import React from 'react'

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer id='contact' className='border-t-[1px] border-gray-800 p-5'>
      <div className="container mx-auto">
        <div className="flex justify-between mb-5">
          <div className="left">
            <h3 className='text-3xl font-medium'>That's All About Me</h3>
            <p className='my-2 text-gray-400'>You Can Find Me Here</p>
            <div className="flex text-3xl gap-x-2">
              <Link target='_blank' href='https://www.facebook.com/profile.php?id=100008974722319'>
                <FaFacebookSquare />
              </Link>
              <Link target='_blank' href='https://www.instagram.com/karim_dev0/'>
                <FaInstagramSquare />
              </Link>
              <Link target='_blank' href='https://api.whatsapp.com/send?phone=201008795765'>
                <FaWhatsappSquare />
              </Link>
              <Link target='_blank' href='https://www.linkedin.com/in/karem-mohamed-a789a6239/'>
                <FaLinkedin />
              </Link>
              <Link target='_blank' href='https://github.com/Karem-Mohamed-Dev'>
                <FaGithubSquare />
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className='text-3xl font-medium mb-8'>If You Want To Hire Me </h3>
            <a className='px-6 py-3 border-[1px] border-white bg-white text-black rounded-sm font-medium duration-300 hover:bg-transparent hover:text-white' href="mailto:karem109k@gmail.com">Get in touch</a>
          </div>
        </div>
        <p className='text-center'>Designed and Developed by <Link className='text-main underline' href='https://www.linkedin.com/in/karem-mohamed-a789a6239/'>Karim Mohamed</Link>, © 2023 KarimDev. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer