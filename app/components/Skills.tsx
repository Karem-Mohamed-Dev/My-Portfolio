import React from 'react'
import { SkillsArr } from '@/lib/Skills'
import Image from 'next/image'

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col justify-between items-center bg-white text-black min-h-screen py-28 text-center'>
      <h2 className='text-4xl font-bold underline underline-offset-8 decoration-4 decoration-main'>Skills</h2>
      <div className="flex flex-wrap container mx-auto gap-10  py-10 px-5">
        {SkillsArr.map((ele, i) => (
          <div key={i} className="w-full lg:w-[30%] h-[120px] flex flex-col justify-between">
            <div className="flex items-center gap-x-5 text-xl font-medium">
              <Image src={ele.icon} alt={ele.name} width={70} height={70} />
              <p>{ele.name}</p>
            </div>
            <div className="h-[30px] rounded-md w-full bg-gray-400 overflow-hidden">
              <div 
                style={{ backgroundColor: ele.color, width: ele.percent}}
                className='h-full flex justify-center items-center font-medium text-white'
              >{ele.percent}</div>
            </div>
          </div>
        ))}
      </div>
      <a href='https://drive.google.com/file/d/1deXIFxESCqugFXuFD3N5w8F7kgOZWCJr/view?usp=sharing' target='_blank' className='border-[2px] border-black w-fit py-3 px-6 font-semibold rounded hover:bg-black hover:text-white duration-300'>View My Resume</a>
    </section>
  )
}

export default Skills
