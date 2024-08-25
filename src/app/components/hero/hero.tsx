'use client';
import "./hero.css";
import CaiqueAnmPic from "../../../../public/assets/caique_anime/caique_anime-blackredbg.jpg";
import CaiqueAnmPicWhite from "../../../../public/assets/caique_anime/caique_anime-whiteorangebg.png";
import Image from 'next/image';
import { GiAbstract066 } from "react-icons/gi";
import "./title.css"
import { useTheme } from "@/app/context/ThemeContext";

function Hero(){
const { darkMode } = useTheme();

    return(
      <div>
        <a id='hero'></a>
        <section className="hero-section bg-hero">
            <div className="top-shadow"></div>
            <div className="hero_container1">
            <div className="hero_content">
              <div className="hero-titles flex flex-col items-center text-center big:gap-5 bigtwo:gap-2 bigtwo2:gap-0">
            <h1 className={`big:h-[80px] ${darkMode ? 'text-shadows' : 'text-shadows-white'}`}>CAIQU3_WAV</h1>
            <h2 className="midtwo3:text-xs">A ODÍSSEIA DE UM DESENVOLVEDOR FULL-STACK</h2>
            </div>
            <Image src={darkMode ? CaiqueAnmPic : CaiqueAnmPicWhite} alt="Caique" className=" majorfour1:mt-4 low:mt-6 lowone:mt-9" />
            <div className="hero-1-content flex flex-col">
            <p>Seja bem vindo ao meu portfolio.</p>
            <p className="gsapbk1">Sou um programador web que enxerga a técnologia como <br /> oportunidades intermináveis
              e uma ferramenta para transformar idéias em realidade.
            </p>
            <GiAbstract066 className="rot text-[45px] self-center text-orange-600 dark:text-red-700"/>
</div></div>
            </div>
        </section>
      </div>
    )
}

export default Hero;