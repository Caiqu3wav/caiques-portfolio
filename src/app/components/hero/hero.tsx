'use client';
import "./hero.css";
import CaiqueAnmPic from "../../../../public/assets/caique_anime/Caique-character9(trapper).png";
import Image from 'next/image';
import { useAnimateKeyframes, AnimateKeyframes } from "react-simple-animate";
import { GiAbstract066 } from "react-icons/gi";
import "./title.css"

function Hero(){

    return(
      <div>
        <a id='hero'></a>
        <section className="hero-section bg-hero">
            <div className="top-shadow"></div>
            <div className="hero_container1">
            <div className="hero_content">
              <div className="hero-titles flex flex-col items-center text-center big:gap-5 bigtwo:gap-2 bigtwo2:gap-0">
            <h1 className="text-shadows big:h-[80px]">CAIQU3_WAV</h1>
            <h2 className="midtwo3:text-xs">A ODÍSSEIA DE UM DESENVOLVEDOR FULL-STACK</h2>
            </div>
            <Image src={CaiqueAnmPic} alt="Caique" className=" majorfour1:mt-4 low:mt-6 lowone:mt-9" />
            <div className="hero-1-content flex flex-col">
            <p>Seja bem vindo ao meu portfolio.</p>
            <p>Sou um programador web que enxerga a técnologia como <br /> oportunidades intermináveis
              e uma ferramenta para transformar idéias em realidade.
            </p>
            <GiAbstract066 className="rot text-[45px] self-center text-blue-300"/>
</div></div>
            </div>
        </section>
      </div>
    )
}

export default Hero;