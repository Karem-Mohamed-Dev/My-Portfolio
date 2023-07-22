import Image from 'next/image'
import React from 'react'

import img from '@/public/me.jpg'

const About = () => {
    return (
        <section id='about' className='border-b-[1px] border-gray-600'>
            <div className="h-screen py-28 px-5 container mx-auto flex flex-col items-center justify-around">
                <h2 className='text-4xl font-bold mb-20 underline underline-offset-8 decoration-4 decoration-main'>About Me</h2>
                <div className="flex gap-x-5">
                    <div className="">
                        <Image src={img} alt='Karim' width={500} height={500} />
                    </div>
                    <div className="p-5">
                        <h3 className='text-4xl mb-4'>My Name Is Karim</h3>
                        <p>I'm <span className='text-main text-2xl'>Front-End</span> Developer based in Egypt, Alexandria</p>
                        <p className='mt-5 w-[400p] text-gray-400 text-xl max-w-[600px]'>I like to solve complex problems while creating<br /> some of the most advanced applications in the industry. <br /> Communicates with other front-end developers within the company<br /> on best practices, new technologies.<br /> Excellent knowledge of JavaScript / TypeScript, HTML and CSS <br />and front-end languages.<br /> Knowledge of React tools including React.js, Redux, and React-Router.<br /> Experience with browser-based debugging and performance testing software.<br /> Excellent troubleshooting skills.<br /> Collaborates closely with product managers, designers, and other engineering teams.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About