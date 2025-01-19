import { SiNextdotjs, SiTypescript, SiPostgresql, SiStripe, SiSolidity, SiStrapi, SiMysql, SiNestjs, SiPrisma, SiMongodb, SiMercadopago } from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoGoLang } from "react-icons/bi";

const getTechnologyDetails = (tech) => {
    const technologies = {
      golang: { name: "Go", icon: <BiLogoGoLang color="blue" size={32} /> },
      tailwind: { name: "Tailwind", icon: <BiLogoTailwindCss color="32a89e" size={32} /> },
      nextjs: { name: "Next.js", icon: <SiNextdotjs color="yellow" size={32} /> },
      typescript: { name: "TypeScript", icon: <SiTypescript color="blue" size={32} /> },
      postgres: { name: "PostgreSQL", icon: <SiPostgresql color="blue" size={32} /> },
      zustand: { 
        name: "Zustand", 
        icon: <img src="/assets/images/zustand.png" alt="Zustand" className="w-[16px] h-[16px]" /> 
      }, 
      java: { name: "Java", icon: <FaJava color="red" size={32} /> },
      stripe: { name: "Stripe", icon: <SiStripe color="purple" size={32} /> },
      solidity: { name: "Solidity", icon: <SiSolidity color="black" size={32} /> },
      prisma: { name: "Prisma", icon: <SiPrisma color="32a89e" size={32} /> },
      mongodb: { name: "MongoDB", icon: <SiMongodb color="green" size={32} /> },
      gsap: {
        name: "GSAP",
        icon: <img src="/assets/images/gsap.png" alt="GSAP" className="w-4 h-4" />
      },
      mercadoPago: { name: "Mercado Pago",  icon: <SiMercadopago color="ADD8E6" size={32} /> },
      nestjs: { name: "NestJs", icon: <SiNestjs color="red" size={32} /> },
      mysql: { name: "MySQL", icon: <SiMysql color="blue" size={32} /> },
      strapi: { name: "Strapi", icon: <SiStrapi color="blue" size={32} /> },
      react: { name: "React", icon: <FaReact color="32a89e" size={32} /> },
    };
  
    return technologies[tech] || { name: tech, icon: null }; // Fallback para casos não mapeados
  };

  export { getTechnologyDetails };