'use client';
import { useEffect, useState } from "react"
import Link from "next/link"
import { projects } from "../../data/projects/index"
import "./projectsComp.css"
import "./texts.css"
import { useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTheme } from "@/app/context/ThemeContext"
import { RiInformationFill } from "react-icons/ri"
import ModalProject from '../ModalProject'

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { darkMode } = useTheme();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia(), breakPoint = 800, breakPointH = 1030;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        isPad: `(min-height: ${breakPointH}px)`
      },
      (context) => {
      let { isDesktop, isMobile, isPad } = context.conditions;
      
        gsap.to(".projects-intros", {
          y: 0,
          opacity: 1,
          rotate: "0deg",
          scrollTrigger:{
            trigger: ".projects-container",
            start: isPad ? "top 1200px" : isMobile ? "top 1400px" : "top 700px",
             end: isPad ? "bottom 1400px" : isMobile ? "bottom 1500px" : "bottom 900px",
            scrub: true,
          }
        })
      }
    )
      }, []);

      const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
      };

      const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
      };

    return(
        <div id="projects" className={`projects-container ${darkMode ? 'bg-ProjectsBgDark' : 'bg-ProjectsBgLight'} flex flex-col items-center justify-center overflow-y-hidden`}>
            <h1 className="micro-5-regular projects-intros translate-y-[400px] opacity-0 dark:text-red-800 text-orange-500">Projetos</h1>
            <h2 className="projects-intros translate-y-[400px] opacity-0 border-solid border-b-4 border-red-400 rounded-lg
              font-bold text-xl text-center">Apenas alguns dos meus projetos pessoais ou freelances que trabalhei ou venho trabalhando</h2>
        <div className="hero-container projects-intros self-center w-[89%] h-fit lowtwo3:w-[80%] midtwo2:w-[90%] lowtwo:ml-2 flex flex-col pl-3 pr-3 rounded-3xl pb-6 items-center
        justify-center mt-2 translate-y-[400px] opacity-0">
        <div className='grid grid-cols-3 midthree:grid-cols-2 low:grid-cols-1 justify-between gap-6 pb-4 pl-2 pr-2 bg-slate-700 rounded-lg bg-opacity-75'>
        {projects.slice(0, 7).map((project, i) => (
    <div key={i} className="flex flex-col items-center justify-center gap-2">
      <button onClick={() => openModal(project)} href={project.link} target="_blank" className="flex flex-col items-center justify-center">
        <div className="relative">
        <img src={project.img} alt="blog image" className="blog-image mt-1 rounded-lg w-[340px] h-[180px]"/>
         <div className="absolute opacity-0 hover:opacity-100 transition-opacity duration-300 flex 
         items-center justify-center flex-col top-0 left-0 w-full h-full bg-black bg-opacity-0 hover:bg-opacity-45 rounded-lg">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <RiInformationFill color='white' size={42} />
            </div>
         </div>
        </div>
        <h1 className="dark:text-red-700 text-orange-600 text-xl midfour:text-[17px] font-bold text-center">{project.name}</h1>
        <p className="text-lg font-bold">{project.descr}</p>
        </button>
    </div>
))}
        </div> 
        <Link href="/projects" target="_blank"><button className="w-[140px] mt-6 bg-orange-500 dark:bg-red-500 text-white rounded-lg py-2">VER MAIS</button></Link>
        </div>
        {modalIsOpen && (
        <ModalProject
          project={selectedProject}
          onClose={closeModal}
          isOpen={modalIsOpen}
        />
      )}
        </div>
    )
}