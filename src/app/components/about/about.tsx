'use client'
import './about.css';
import { MdAttachEmail } from "react-icons/md";
import { MdLocalAirport } from "react-icons/md";
import { MdOutlineMoreTime } from "react-icons/md";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import CaiqueAnmPicAbout from "../../../../public/assets/caique_anime/Caique-character16(producing).png";
import Image from 'next/image';
import CardsGame from "../../../../public/assets/images/catasgif.gif";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useLayoutEffect } from 'react';

function About(){

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".about-info-container", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger:{
        trigger: ".about-section",
        markers: true,
        start: "top 600px", end: "bottom 800px",
        scrub: true,
      }
    })
    return () => {
      gsap.killTweensOf(".about-info-container")
    }
  }, [])

    return(
      <section id="about" className="about-section">
    <h1 className="text-3xl font-bold mb-2 midtwo2:mt-4 midtwo3:mt-7 low:mt-0 lowone:mt-11">Mais sobre mim</h1>
    <div className="flex w-full justify-around gap-3">
      <div className="about-info-container flex flex-col items-center w-[300px] h-[400px] majorthree:h-[510px] majorthree:gap-5 bg-black bg-opacity-35 border-l-blue-400
       border-t-blue-400 border-solid border-2 rounded-tl-[100px] rounded-br-[100px] majorthree1:h-[400px] midfour:w-[250px] majorthree1:gap-1 midfour:h-[450px] midfour:ml-2">
            <Image className="rounded-xl w-[120px] mt-6 midfour:w-[100px]" src={CaiqueAnmPicAbout} alt="" />
            <h1 className="font-bold text-blue-400 text-2xl">Caique</h1>
            <h2 className='font-semibold majortwo4:text-xs midfour:ml-1'>Desenvolvedor full-stack</h2>
            <div className="personal-card flex flex-col gap-3">
              <div className="flex gap-3 midfour:gap-1">
              <MdAttachEmail color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p className='midfour:text-[12px]'>asapcaique@gmail.com</p>
              </div>
              <div className="flex gap-3 midfour:gap-1">
              <MdLocalAirport color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p className='midfour:text-[12px]'>Brasil</p>
              </div>
              <div className="flex gap-3 midfour:gap-1">
              <MdOutlineMoreTime color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p className='midfour:text-[12px]'>Full-time/Freelancer</p>
              </div>
              <div className="flex gap-3 midfour:gap-1">
              <PiWhatsappLogoDuotone color="rgba(39, 245, 238, 0.8)" className="mt-2" /><a className="text-white underline underline-offset-4 midfour:text-[12px]" target='_blank' href=" https://wa.me/12997364432">(12) 997364432</a>
              </div>
              <button className="text-black flex w-[70%] py-2 bg-slate-100 gap-3
               items-center justify-center rounded-xl">CVV <FaFileDownload/></button>
              </div>
             </div>
             <div className="flex flex-col gap-6 w-[570px] majortwo1:w-[530px] midtw:gap-2"><h1 className="font-bold text-[48px] majortwo:text-[40px] majortwo4:text-[32px] midtw:text-[26px] low:text-[23px]
              lowone:text-[19px]">Quem <br /> É <span className="text-blue-400">Caique</span>, <br /> Como Desenvolvedor?</h1>
             <p className='midtwo:text-[15px] midtwo4:text-[12px]'>Tenho 19 anos e sou desenvolvedor web. Soube mais da programação durante o curso técnico, decidindo aprofundar-me nesse universo. Meu objetivo é construir o que imagino,
               explorando todo o potencial da tecnologia. Gosto da mistura de criatividade e solução de problemas que abrangem a área. Estou em constante busca por aprendizado e inovação
                para transformar ideias em realidade.</p>
               <p className="text-blue-400 font-extrabold text-[54px] majortwo:text-[46px] majortwo4:text-[37px] majorthree1:hidden">Bora <br /> negociar?</p>
    </div>
    <div className='flex flex-col items-center justify-center w-[300px] bg-black bg-opacity-35 rounded-xl border-solid border-white
     border-2 pb-2 majorthree1:hidden'>
      <Image src={CardsGame} alt='cards gif'/>
      <h1 className='text-blue-400 font-bold'>Cartas na manga</h1>
      <h2 className='text-sm'>(Minhas principais stacks)</h2>
      <div className='stacks-container grid grid-cols-2 gap-4'>
      <div className='flex flex-col items-center text-center'><FaReact className='text-[50px] text-blue-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>React.JS</p></div>
        <div className='flex flex-col items-center text-center'><TbBrandNextjs className='text-[50px]'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Next.JS</p></div>
        <div className='flex flex-col items-center text-center'><TbBrandJavascript  className='text-[50px] text-yellow-400'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>JavaScript</p></div>
        <div className='flex flex-col items-center text-center'><FaNode  className='text-[50px] text-green-600'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Node.JS</p></div>
        <div className='flex flex-col items-center text-center'><SiMongodb  className='text-[50px] text-green-600'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>MongoDB</p></div>
        <div className='flex flex-col items-center text-center'><FaJava  className='text-[50px] text-red-600'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Java</p></div>
        <div className='flex flex-col items-center text-center'><SiFirebase  className='text-[50px] text-red-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Firebase</p></div>
        <div className='flex flex-col items-center text-center'><SiTypescript  className='text-[50px] text-blue-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>TypeScript</p></div>
        </div>
    </div>
    </div> 
    <div className='flex-col hidden items-center justify-center bg-black bg-opacity-35 rounded-xl border-solid border-white
     border-2 pb-2 w-[70%] mt-3 majorthree1:flex  midtwo:w-[88%]'>
      <Image src={CardsGame} className='w-[200px]' alt='cards gif'/>
      <h1 className='text-blue-400 font-bold'>Cartas na manga</h1>
      <h2 className='text-sm'>(Minhas principais stacks)</h2>
      <div className='grid grid-cols-4 gap-4'>
      <div className='flex flex-col items-center text-center'><FaReact className='text-[50px] text-blue-500'/> <p className='midfour:text-[13px]'>React.JS</p></div>
        <div className='flex flex-col items-center text-center'><TbBrandNextjs className='text-[50px]'/> <p className='midfour:text-[13px]'>Next.JS</p></div>
        <div className='flex flex-col items-center text-center'><TbBrandJavascript  className='text-[50px] text-yellow-400'/> <p className='midfour:text-[13px]'>JavaScript</p></div>
        <div className='flex flex-col items-center text-center'><FaNode  className='text-[50px] text-green-600'/> <p className='midfour:text-[13px]'>Node.JS</p></div>
        <div className='flex flex-col items-center text-center'><SiMongodb  className='text-[50px] text-green-600'/> <p className='midfour:text-[13px]'>MongoDB</p></div>
        <div className='flex flex-col items-center text-center'><FaJava  className='text-[50px] text-red-600'/> <p className='midfour:text-[13px]'>Java</p></div>
        <div className='flex flex-col items-center text-center'><SiFirebase  className='text-[50px] text-red-500'/> <p className='midfour:text-[13px]'>Firebase</p></div>
        <div className='flex flex-col items-center text-center'><SiTypescript  className='text-[50px] text-blue-500'/> <p className='midfour:text-[13px]'>TypeScript</p></div>
        </div>
    </div>
      </section>
    );
}

export default About;