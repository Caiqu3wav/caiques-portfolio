'use client'
import './about.css';
import { MdAttachEmail, MdLocalAirport, MdOutlineMoreTime } from "react-icons/md";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import CaiqueAnmPicAbout from "../../../../public/assets/caique_anime/Caique-character16(producing).png";
import Image from 'next/image';
import CardsGame from "../../../../public/assets/images/catasgif.gif";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode, FaPython, FaFileDownload, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiMongodb, SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { gsap } from 'gsap';
import { GrDocker } from "react-icons/gr";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';
import { BiLogoCPlusPlus, BiLogoGoLang } from "react-icons/bi";
import brLogo from '../../../../public/assets/images/brlogo.png'
import euaLogo from '../../../../public/assets/images/eualogo.png'

function About(){

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let mm = gsap.matchMedia(), breakPoint = 800;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        isPad: `(min-height: ${breakPoint - 1}px)`
      },
      (context) => {
      let { isDesktop, isMobile, isPad } = context.conditions;
      
    gsap.to(".about-info-container", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger:{
        trigger: ".about-section",
        start: isDesktop ? "top 600px" : "top 850px",
         end: isDesktop ? "bottom 800px" : "bottom 1000px",
        scrub: true,
      }
    })

    gsap.to(".texts-about-center", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger:{
        trigger: ".about-section",
        start: "top 700px", end: "bottom 780px",
        scrub: true,
      }
    })
    gsap.to(".skills-container", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger:{
        trigger: ".about-section",
        start: "top 660px", end: "bottom 680px",
        scrub: true,
      }
    })
    gsap.to(".below-skills", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger:{
        trigger: ".about-section",
        start: isPad ? "top 700px" : "top 400px", end: isPad ? "bottom 800px" : "bottom 600px",
        scrub: true,
      }
    })
  }
  )
    return () => {
      gsap.killTweensOf(".about-info-container", ".texts-about-center")
    }
  }, []);

  const handleDownloadClick = () => {
    const downloadLink = document.createElement('a');
    
    downloadLink.href = '/assets/caique-curriculo-fullstack.pdf';

    downloadLink.download = 'caique-curriculo-fullstack.pdf';

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const handleDownloadClickEnglish = () => {
    const downloadLink = document.createElement('a');
    
    downloadLink.href = '/assets/currcaiq-fullstack-og-eng.pdf';

    downloadLink.download = 'currcaiq-fullstack-og-eng.pdf';

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };


    return(
      <section id="about" className="about-section">
    <h1 className="text-3xl font-bold mb-2 midtwo2:mt-4 midtwo3:mt-7 low:mt-0 lowone:mt-11">Mais sobre mim</h1>
    <div className="flex w-full justify-around gap-3">
      <div className="about-info-container flex flex-col items-center w-[300px] h-[450px] majorthree:h-[510px] majorthree:gap-5 bg-black bg-opacity-35 border-l-red-400
       border-t-red-400 border-solid border-2 rounded-tl-[100px] rounded-br-[100px] majorthree1:h-[400px] midfour:w-[250px] majorthree1:gap-1 midfour:h-[450px] midfour:ml-2">
            <Image className="rounded-xl w-[120px] mt-6 midfour:w-[100px]" src={CaiqueAnmPicAbout} alt="" />
            <h1 className="font-bold text-orange-600 dark:text-red-600  text-2xl border-b-2">Caique</h1>
            <h2 className='font-semibold majortwo4:text-xs midfour:ml-1'>Desenvolvedor full-stack</h2>
            <div className="personal-card flex flex-col gap-3">
              <div className="flex gap-3 midfour:gap-1">
              <MdAttachEmail className="mt-2 dark:text-red-800 text-orange-700" /><p className='midfour:text-[12px]'>asapcaique@gmail.com</p>
              </div>
              <div className="flex gap-3 midfour:gap-1">
              <MdLocalAirport className="mt-2 dark:text-red-800 text-orange-700" /><p className='midfour:text-[12px]'>Brasil</p>
              </div>
              <div className="flex gap-3 midfour:gap-1">
              <MdOutlineMoreTime className="mt-2 dark:text-red-800 text-orange-700" /><p className='midfour:text-[12px]'>Full-time/Freelancer</p>
              </div>
              <div className="flex gap-3 midfour:gap-1">
              <PiWhatsappLogoDuotone className="mt-2 dark:text-red-800 text-orange-700" /><a className="text-white underline underline-offset-4 midfour:text-[12px]" target='_blank' href=" https://wa.me/12996246050">(12) 996246050</a>
              </div>
              <div className='flex flex-col gap-2 majorthree1:flex-row midfour:flex-col'>
              <div className='flex gap-3 items-center'>
              <button className="text-black flex w-[70%] py-2 bg-slate-100 gap-3
               items-center justify-center rounded-xl midtw:py-1" onClick={handleDownloadClick}>CV <FaFileDownload/></button>
               <Image src={brLogo} className='w-6 midtw:w-4' alt='brazil cv'/>
               </div>
               <div className='flex gap-3 items-center'>
              <button className="text-black flex w-[70%] py-2 bg-slate-100 gap-3
               items-center justify-center rounded-xl midtw:py-1" onClick={handleDownloadClickEnglish}>CV <FaFileDownload/></button>
               <Image src={euaLogo} className='w-6 midtw:w-4' alt='eua cv'/>
               </div>
               </div>
              </div>
             </div>
             <div className="texts-about-center opacity-0 flex flex-col gap-6 w-[570px] majortwo1:w-[530px] midtw:gap-2"><h1 className="font-bold text-[48px] majortwo:text-[40px] majortwo4:text-[32px] midtw:text-[26px] low:text-[23px]
              lowone:text-[19px]">Quem <br /> É <span className="text-orange-600 dark:text-red-600">Caique</span>, <br /> Como Desenvolvedor?</h1>
             <p className='midtwo:text-[15px] midtwo4:text-[12px]'>Tenho 20 anos e sou desenvolvedor web. Assim que eu soube como a programação funciona de verdade, decidi aprofundar-me nesse universo. Meu objetivo é construir o que imagino,
               explorando todo o potencial da tecnologia. Gosto da mistura de criatividade e solução de problemas que abrangem a área. Estou em constante busca por aprendizado e inovação
                para transformar ideias em realidade.</p>
               <p className="text-orange-600 dark:text-red-600 font-extrabold text-[54px] majortwo:text-[46px] majortwo4:text-[37px] majorthree1:hidden">Bora <br /> negociar?</p>
    </div>
    <div className='skills-container translate-x-[400px] rotate-[180deg] flex flex-col items-center justify-center w-[300px] bg-black
      opacity-0 bg-opacity-35 rounded-xl border-solid border-white
     border-2 pb-2 h-[620px] majorthree1:hidden majorthree:h-[645px]'>
      <Image src={CardsGame} className='w-[130px]' alt='cards gif'/>
      <h1 className='text-orange-600 dark:text-red-600 font-bold'>Cartas na manga</h1>
      <h2 className='text-sm'>(Minhas principais stacks)</h2>
      <div className='stacks-container grid grid-cols-2 gap-4'>
      <div className='flex flex-col items-center text-center'><FaReact className='skills-logo text-blue-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>React.JS</p></div>
        <div className='flex flex-col items-center text-center'><TbBrandNextjs className='skills-logo text-yellow-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Next.JS</p></div>
        <div className='flex flex-col items-center text-center'><BiLogoCPlusPlus  className='skills-logo text-red-600'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>C++</p></div>
        <div className='flex flex-col items-center text-center'><FaNode  className='skills-logo text-green-600'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Node.JS</p></div>
        <div className='flex flex-col items-center text-center'><SiMongodb  className='skills-logo text-green-600'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>MongoDB</p></div>
        <div className='flex flex-col items-center text-center'><BiLogoGoLang  className='skills-logo text-blue-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Go</p></div>
        <div className='flex flex-col items-center text-center'><FaPython  className='text-[50px] text-yellow-400'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>Java</p></div>
        <div className='flex flex-col items-center text-center'><FaJava  className='skills-logo text-red-600'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Java</p></div>
        <div className='flex flex-col items-center text-center'><SiNestjs  className='skills-logo text-red-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Nest.JS</p></div>
        <div className='flex flex-col items-center text-center'><SiTypescript  className='skills-logo text-blue-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>TypeScript</p></div>
        <div className='flex flex-col items-center text-center'><SiMysql  className='skills-logo bg-blue-600 rounded-full px-1 text-orange-400'/> <p className='border-solid  border-b-2 border-purple-700 rounded-md'>MySql</p></div>
        <div className='flex flex-col items-center text-center'><GrDocker  className='skills-logo text-blue-500'/> <p className='border-solid  border-b-2 border-purple-700 rounded-md'>Docker</p></div>
        </div> 
    </div>
    </div> 
    <div className='below-skills opacity-0 flex-col hidden items-center justify-center bg-black bg-opacity-35 rounded-xl border-solid border-white
     border-2 pb-2 w-[70%] mt-3 majorthree1:flex  midtwo:w-[95%]'>
      <Image src={CardsGame} className='w-[200px]' alt='cards gif'/>
      <h1 className='text-orange-600 dark:text-red-600 font-bold'>Cartas na manga</h1>
      <h2 className='text-sm'>(Minhas principais stacks)</h2>
      <div className='grid grid-cols-4 gap-4'>
      <div className='flex flex-col items-center text-center'><FaReact className='text-[50px] text-blue-500'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>React.JS</p></div>
        <div className='flex flex-col items-center text-center'><TbBrandNextjs className='text-[50px] text-yellow-500'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>Next.JS</p></div>
        <div className='flex flex-col items-center text-center'><BiLogoCPlusPlus  className='text-[50px] text-red-600'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>C++</p></div>
        <div className='flex flex-col items-center text-center'><FaNode  className='text-[50px] text-green-600'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>Node.JS</p></div>
        <div className='flex flex-col items-center text-center'><SiMongodb  className='text-[50px] text-green-600'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>MongoDB</p></div>
        <div className='flex flex-col items-center text-center'><BiLogoGoLang  className='text-[50px] text-blue-500'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>Go</p></div>
        <div className='flex flex-col items-center text-center'><FaPython  className='text-[50px] text-yellow-400'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>Java</p></div>
        <div className='flex flex-col items-center text-center'><FaJava  className='text-[50px] text-red-600'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>Java</p></div>
        <div className='flex flex-col items-center text-center'><SiNestjs  className='text-[50px] text-red-500'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>Nest.JS</p></div>
        <div className='flex flex-col items-center text-center'><SiTypescript  className='text-[50px] text-blue-500'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>TypeScript</p></div>
        <div className='flex flex-col items-center text-center'><SiMysql className='text-[50px] bg-blue-600 rounded-full px-1 text-orange-400'/> <p className='border-solid border-b-2 border-purple-700 rounded-md'>MySql</p></div>
        <div className='flex flex-col items-center text-center'><GrDocker className='text-[55px] text-blue-500'/> <p className='midfour:text-[13px] border-solid border-b-2 border-purple-700 rounded-md'>Docker</p></div>
        </div>
    </div>
      </section>
    );
}

export default About;