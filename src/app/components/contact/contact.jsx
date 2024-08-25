import Wave from "react-wavify";
import Image from "next/image";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscGithubAction } from "react-icons/vsc";
import Link from "next/link";
import { MdAttachEmail } from "react-icons/md";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import CaiqueAnimation from "../../../../public/assets/caique_anime/Caique-character17(studio).png"
import "./contact.css"

export default function Contact() {
    return(
      <div className="bg-[#131416] flex flex-col w-full h-fit">
        <Wave fill='url(#gradient)'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.25,
          points: 3
        }}
  >
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#660000" />
      <stop offset="90%" stopColor="#660000" />
    </linearGradient>
  </defs>
</Wave>
<div id="contact" className="flex items-center justify-center min-h-[400px] bg-gradient-to-b from-[#660000] to-[#e6ccff]">
<div className="hero-container relative bottom-[70px] pt-2 bg-slate-200 bg-opacity-40 self-center w-[70%] lowtwo3:w-[80%] lowtwo:ml-2 flex flex-col pl-3 pr-3 rounded-3xl pb-6 items-center
        justify-center mt-2">
            <Image className="rounded-[30%] self-center w-[300px] midtw:w-[230px] midfour:w-[170px]" src={CaiqueAnimation} alt="Caique (the developer of this page) animate art image"/>
                <h1 className="caique-name text-[45px] text-red-700">Caique</h1>
                <h1 className="text-xl text-black font-bold text-center">Programador FullStack</h1>
                <h1 className="text-black font-semibold">Experiência: 2 Anos</h1>
                <p className="text-black font-light">Enfim, espero estar fornecendo todas informações que precisava, estou em constantemente aprendizado
                atravez de autodidatismo, cursos, pesquisas e principalmente na prática com meus projetos, o jeito que mais consigo aprender. <br />
                estou aberto para trabalhar em projetos freelance ou principalmente recrutamento para equipes, minha maior missão agora é me conectar
                e expandir minha experiência. Para mais informações e propostas entre em contato, muito obrigado.
                </p>
                <FaArrowAltCircleDown size={40} className="bounce2 mt-4"/>
                <div className="flex mt-4">
                    <FaLinkedin size={25}/>: <Link href="https://www.linkedin.com/in/caique-dos-santos-a69425246/" target="_blank">
                        <p className="links-inform ml-2 text-red-900 midtwo:text-[13px] midfour:text-[11px] midfour:font-bold lowone:text-[9px]">https://www.linkedin.com/in/caique-dos-santos-a69425246/</p></Link>
                </div><div className="flex mt-4">
                    <FaGithub size={25}/>: <Link href="https://github.com/Caiqu3wav" target="_blank">
                        <p className="links-inform ml-2 text-red-900 midtwo:text-[13px] midfour:text-[11px] midfour:font-bold">https://github.com/Caiqu3wav</p></Link>
                </div>
                <div className="flex mt-4">
                    <MdAttachEmail size={25}/>:
                    <Link href="mailto:asapcaique@gmail.com">
                        <p className="links-inform ml-2 text-red-900 midtwo:text-[13px] midfour:text-[11px] midfour:font-bold">@asapcaique7@gmail.com</p>
                        </Link>
                </div>
                <div className="flex mt-4">
                <PiWhatsappLogoDuotone size={25} color="black" />:<a className="text-red-900 ml-2 underline underline-offset-4 
                midfour:text-[13px]" target='_blank' href=" https://wa.me/12996246050">(12) 996246050</a>
                </div>
            </div>
</div>
</div>
    )
}