import React from 'react'
import { projectsData } from '@/lib/Projects'
import SinglProject from './SinglProject'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen py-28 px-5'>
      <div className="container mx-auto flex flex-col items-center justify-around min-h-screen">
        <h2 className='text-4xl font-bold underline underline-offset-8 decoration-4 decoration-main'>Projects</h2>
        <div className="flex flex-col gap-y-5 py-10 lg:py-0">
          {projectsData.map(ele => (
            <SinglProject key={ele.id} {...ele} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects