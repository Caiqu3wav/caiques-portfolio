import React from 'react'
import { projects } from '@/app/data/projects/index'
import Link from 'next/link'
import "./projects.css"

interface projectsContProps {
        bgImg: string,
}

export default function ProjectsCont({ bgImg }: projectsContProps) {

  return (
    <div>
      <div id="projects" style={{ backgroundImage: `url(${bgImg})` }} className="projects-container bg-no-repeat flex flex-col items-center justify-center overflow-y-hidden">
        <h1 className="micro-5-regular projects-intros text-blue-400">Projetos</h1>
        <div className="hero-container projects-intros self-center w-[89%] h-fit lowtwo3:w-[80%] midtwo2:w-[90%] lowtwo:ml-2 flex flex-col pl-3 pr-3 rounded-3xl pb-6 
        items-center justify-center mt-2">
          <div className='grid grid-cols-3 midthree:grid-cols-2 low:grid-cols-1 justify-between gap-6 pb-4 pl-2 pr-2 bg-slate-400 rounded-lg bg-opacity-75'>
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col items-center justify-center gap-2">
                <Link href={project.link} target="_blank" className="flex flex-col items-center justify-center">
                  <img src={project.img} alt="blog image" className="blog-image mt-1 rounded-lg w-[90%]" />
                  <h1 className="text-purple-700 text-xl midfour:text-[17px] font-bold text-center">{project.name}</h1>
                  <p className="text-lg font-bold">{project.descr}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}