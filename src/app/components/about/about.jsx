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
import { SiTypescript, SiNestjs, SiMongodb, SiPostgresql } from "react-icons/si";
import { gsap } from 'gsap';
import { GrDocker } from "react-icons/gr";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';
import { BiLogoCPlusPlus, BiLogoGoLang } from "react-icons/bi";
import brLogo from '../../../../public/assets/images/brlogo.png'
import euaLogo from '../../../../public/assets/images/eualogo.png'
import { useTheme } from "@/app/context/ThemeContext";

function About(){
  const { darkMode } = useTheme();

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
        start: isPad ? "top 700px" : "top 400px", end: isPad ? "bottom 800px" : "bottom 500px",
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
    
    downloadLink.href = '/assets/cvc_dev_caique_pt.pdf';

    downloadLink.download = 'cvc_dev_caique_pt.pdf';

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const handleDownloadClickEnglish = () => {
    const downloadLink = document.createElement('a');
    
    downloadLink.href = '/assets/cvc_dev_caique_en.pdf';

    downloadLink.download = 'cvc_dev_caique_en.pdf';

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const skills = [
    { icon: <FaReact className="skills-logo text-blue-500" />, label: 'React.JS' },
    { icon: <TbBrandNextjs className="skills-logo text-yellow-500" />, label: 'Next.JS' },
    { icon: <BiLogoCPlusPlus className="skills-logo text-red-600" />, label: 'C++' },
    { icon: <FaNode className="skills-logo text-green-600" />, label: 'Node.JS' },
    { icon: <FaJava className="skills-logo text-red-600" />, label: 'Java' },
    { icon: <FaPython className="text-[50px] text-yellow-400" />, label: 'Python' },
    { icon: <BiLogoGoLang className="skills-logo text-blue-500" />, label: 'Go' },
  { icon: <SiNestjs className="skills-logo text-red-500" />, label: 'Nest.JS' },
    { icon: <SiTypescript className="skills-logo text-blue-500" />, label: 'TypeScript' },
    { icon: <SiPostgresql className="skills-logo bg-blue-600 rounded-full px-1 text-orange-400" />, label: 'PostgreSql' },
    { icon: <GrDocker className="skills-logo text-blue-500" />, label: 'Docker' },
  ];

  const skillsHorizontal = [
    { icon: <FaReact className="text-[50px] text-blue-500" />, label: 'React.JS' },
    { icon: <TbBrandNextjs className="text-[50px] text-yellow-500" />, label: 'Next.JS' },
    { icon: <BiLogoCPlusPlus className="text-[50px] text-red-600" />, label: 'C++' },
    { icon: <FaNode className="text-[50px] text-green-600" />, label: 'Node.JS' },
    { icon: <SiMongodb className="text-[50px] text-green-600" />, label: 'MongoDB' },
    { icon: <BiLogoGoLang className="text-[50px] text-blue-500" />, label: 'Go' },
    { icon: <FaPython className="text-[50px] text-yellow-400" />, label: 'Python' },
    { icon: <FaJava className="text-[50px] text-red-600" />, label: 'Java' },
    { icon: <SiNestjs className="text-[50px] text-red-500" />, label: 'Nest.JS' },
    { icon: <SiTypescript className="text-[50px] text-blue-500" />, label: 'TypeScript' },
    { icon: <SiPostgresql className="text-[50px] bg-blue-600 rounded-full px-1 text-orange-400" />, label: 'PostgreSql' },
    { icon: <GrDocker className="text-[50px] text-blue-500" />, label: 'Docker' },
  ];
  
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
              <PiWhatsappLogoDuotone className="mt-2 dark:text-red-800 text-orange-700" /><a className="text-white underline underline-offset-4 midfour:text-[12px]" target='_blank' href=" https://wa.me/14996685131">(14) 996685131</a>
              </div>
              <div className='flex flex-col gap-2 majorthree1:flex-row midfour:flex-col'>
              <div className='flex gap-3 items-center'>
              <button className="text-black flex w-[70%] py-2 bg-slate-100 gap-3
               items-center justify-center rounded-xl midtw:py-1" onClick={handleDownloadClick}>CVC <FaFileDownload/></button>
               <Image src={brLogo} className='w-6 midtw:w-4' alt='brazil cv'/>
               </div>
               <div className='flex gap-3 items-center'>
              <button className="text-black flex w-[70%] py-2 bg-slate-100 gap-3
               items-center justify-center rounded-xl midtw:py-1" onClick={handleDownloadClickEnglish}>CVC <FaFileDownload/></button>
               <Image src={euaLogo} className='w-6 midtw:w-4' alt='eua cv'/>
               </div>
               </div>
              </div>
             </div>
             <div className="texts-about-center opacity-0 flex flex-col gap-6 w-[570px] majortwo1:w-[530px] midtw:gap-2"><h1 className="font-bold text-[48px] majortwo:text-[40px] majortwo4:text-[32px] midtw:text-[26px] low:text-[23px]
              lowone:text-[19px]">Quem <br /> É <span className="text-orange-600 dark:text-red-600">Caique</span>, <br /> Como Desenvolvedor?</h1>
             <p className='midtwo:text-[14px] midtwo4:text-[11px]'>Tenho 20 anos e sou desenvolvedor web. Assim que eu soube como a programação funciona de verdade, decidi aprofundar-me nesse universo. Meu objetivo é construir o que 
              imagino, sem deixar de lado a performance e a segurança. Estou sempre explorando todo o potencial da tecnologia. Gosto da mistura de criatividade e solução de problemas que abrangem a área. Estou em constante busca por aprendizado e inovação
                para transformar ideias em realidade.</p>
               <p className="text-orange-600 dark:text-red-600 font-extrabold text-[54px] majortwo:text-[46px] majortwo4:text-[37px] majorthree1:hidden">Bora <br /> negociar?</p>
    </div>
    <div className='skills-container h-fit translate-x-[400px] rotate-[180deg] flex flex-col items-center justify-center w-[300px] bg-black
      opacity-0 bg-opacity-35 rounded-xl border-solid border-white
     border-2 pb-2  majorthree1:hidden'>
      <Image src={CardsGame} className='w-[130px]' alt='cards gif'/>
      <h1 className='text-orange-600 dark:text-red-600 font-bold'>Cartas na manga</h1>
      <h2 className='text-sm'>(Minhas principais stacks)</h2>
      <div className='stacks-container grid grid-cols-2 gap-4'>
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          {skill.icon}
          <p className={`border-solid border-b-2 ${darkMode ? 'border-red-700' : 'border-yellow-500'} rounded-md`}>{skill.label}</p>
        </div>
      ))}
        </div> 
    </div>
    </div> 
    <div className='below-skills opacity-0 flex-col hidden items-center justify-center bg-black bg-opacity-35 rounded-xl border-solid border-white
     border-2 pb-2 w-[70%] mt-3 majorthree1:flex  midtwo:w-[95%]'>
      <Image src={CardsGame} className='w-[200px]' alt='cards gif'/>
      <h1 className='text-orange-600 dark:text-red-600 font-bold'>Cartas na manga</h1>
      <h2 className='text-sm'>(Minhas principais stacks)</h2>
      <div className='grid grid-cols-4 gap-4'>
        {skills.map((skill, i) => (
          <div key={i} className='flex flex-col items-center text-center'>
            {skill.icon}
           <p className={`midfour:text-[13px] border-solid border-b-2 ${darkMode ? 'border-red-700' : 'border-yellow-500'} rounded-md`}>{skill.label}</p>
          </div>
        ))}
        </div>
    </div>
      </section>
    );
}

export default About;