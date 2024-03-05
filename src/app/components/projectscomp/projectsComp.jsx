'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "../../data/projects/index";
import "./projectsComp.css";
import "./texts.css";

export default function Projects() {

    return(
        <div id="projects" className="projects-container flex flex-col items-center justify-center">
            <h1 className="micro-5-regular text-blue-400">Projetos</h1>
            <h2 className="border-solid border-b-4 border-blue-400 rounded-lg
            ">Apenas alguns dos meus projetos pessoais ou freelances que trabalhei ou venho trabalhando</h2>
        <div className="hero-container self-center w-[89%] h-fit lowtwo3:w-[80%] midtwo2:w-[90%] lowtwo:ml-2 flex flex-col pl-3 pr-3 rounded-3xl pb-6 items-center
        justify-center mt-2">
        <div className='grid grid-cols-3 midthree:grid-cols-2 low:grid-cols-1 justify-between gap-6 pb-4 pl-2 pr-2 bg-slate-400 rounded-lg bg-opacity-75'>
        {projects.map((project) => (
    <div key={project.id} className="flex flex-col items-center justify-center gap-2">
      <Link href={project.link} target="_blank" className="flex flex-col items-center justify-center">
        <img src={project.img} alt="blog image" className="blog-image mt-1 rounded-lg w-[90%]"/>
        <h1 className="text-purple-700 text-xl midfour:text-[17px] font-bold text-center font-bold">{project.name}</h1>
        <p>{project.descr}</p>
        </Link>
    </div>
))}
        </div>
        </div>
        </div>
    )
}