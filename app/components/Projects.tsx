'use client'
import React, { useState } from 'react'
import { projectsData, backendData } from '@/lib/Projects'
import FrontProject from './FrontProject'
import BackProject from './BackProject'

const Projects = () => {
  const [selected, setSelected] = useState<string>("back");
  return (
    <section id='projects' className='min-h-screen py-28 px-5'>
      <div className="container mx-auto flex flex-col gap-16 items-center justify-around min-h-screen">
        <h2 className='text-4xl font-bold underline underline-offset-8 decoration-4 decoration-main'>Projects</h2>
        
        <div>
          <button className='py-2 px-8 font-medium rounded-tl-md rounded-bl-md duration-300' style={{
            background: selected === "front" ? '#129C5E' : '#ddd',
            color: selected === "front" ? '#fff' : '#000',
          }} onClick={() => setSelected('front')}>Front End</button>
          <button className=' py-2 px-8 font-medium rounded-tr-md rounded-br-md duration-300' style={{
            background: selected === "back" ? '#129C5E' : '#ddd',
            color: selected === "back" ? '#fff' : '#000',
          }} onClick={() => setSelected('back')}>Back End</button>
        </div>

        <div className="flex flex-col gap-y-5 py-10 lg:py-0">
          {selected === "front" && projectsData.map(ele => (
            <FrontProject key={ele.id} {...ele} />
          ))}
          {selected === "back" && backendData.map(ele => (
            <BackProject key={ele.id} {...ele} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
