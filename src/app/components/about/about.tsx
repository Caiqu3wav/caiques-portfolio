import './about.css';
import { MdAttachEmail } from "react-icons/md";
import { MdLocalAirport } from "react-icons/md";
import { MdOutlineMoreTime } from "react-icons/md";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import CaiqueAnmPicAbout from "../../../../public/assets/caique_anime/Caique-character16(producing).png";
import Image from 'next/image';


function About(){
    return(
      <section className="about-section">
    <h1 className="text-3xl font-bold">Mais sobre mim</h1>
    <div className="flex">
      <div className="flex flex-col items-center w-[300px] h-[400px] bg-opaco-black border-l-blue-400
       border-t-blue-400 border-solid border-2 rounded-tl-[100px] rounded-br-[100px]">
            <Image className="rounded-xl w-[120px] mt-6" src={CaiqueAnmPicAbout} alt="" />
            <h1 className="font-bold">Caique</h1>
            <h2>Desenvolvedor full-stack</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
              <MdAttachEmail color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p>asapcaique@gmail.com</p>
              </div>
              <div className="flex gap-3">
              <MdLocalAirport color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p>Brasil</p>
              </div>
              <div className="flex gap-3">
              <MdOutlineMoreTime color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p>Full-time/Freelancer</p>
              </div>
              <div className="flex gap-3">
              <PiWhatsappLogoDuotone color="rgba(39, 245, 238, 0.8)" className="mt-2" /><a className="text-white underline underline-offset-4" target='_blank' href=" https://wa.me/12997364432">(12) 997364432</a>
              </div>
              </div>
             </div>
             <div className="flex flex-col gap-6"><h1 className="font-bold text-[48px]">Quem <br /> É <span className="text-blue-400">Caique</span>, <br /> Como Desenvolvedor?</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro quaerat esse provident
               delectus est nulla! Mollitia, eligendi delectus minima molestias doloribus eaque! Ipsam consectetur blanditiis sed, porro in placeat!</p>
               <p className="text-blue-400 font-extrabold text-[54px]">Bora <br /> negociar?</p>
    </div></div> 
      </section>
    );
}

export default About;