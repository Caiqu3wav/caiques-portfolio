import { SiNextdotjs, SiTypescript, SiPostgresql, SiStripe, SiSolidity, SiStrapi, SiMysql, SiNestjs, SiPrisma, SiMongodb, SiMercadopago } from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoGoLang } from "react-icons/bi";

const getTechnologyDetails = (tech) => {
    const technologies = {
      golang: { name: "Go", icon: <BiLogoGoLang color="blue" /> },
      tailwind: { name: "Tailwind", icon: <BiLogoTailwindCss color="32a89e" /> },
      nextjs: { name: "Next.js", icon: <SiNextdotjs color="yellow"  /> },
      typescript: { name: "TypeScript", icon: <SiTypescript color="blue" /> },
      postgres: { name: "PostgreSQL", icon: <SiPostgresql color="blue"  /> },
      zustand: { 
        name: "Zustand", 
        icon: <img src="/assets/images/zustand.png" alt="Zustand" className="w-[16px] h-[16px]" /> 
      }, 
      java: { name: "Java", icon: <FaJava color="red"  /> },
      stripe: { name: "Stripe", icon: <SiStripe color="purple" /> },
      solidity: { name: "Solidity", icon: <SiSolidity color="black" /> },
      prisma: { name: "Prisma", icon: <SiPrisma color="32a89e" /> },
      mongodb: { name: "MongoDB", icon: <SiMongodb color="green"/> },
      gsap: {
        name: "GSAP",
        icon: <img src="/assets/images/gsap.png" alt="GSAP" className="w-[16px] h-[16px]" />
      },
      mercadoPago: { name: "Mercado Pago",  icon: <SiMercadopago color="ADD8E6" /> },
      nestjs: { name: "NestJs", icon: <SiNestjs color="red" /> },
      mysql: { name: "MySQL", icon: <SiMysql color="blue" /> },
      strapi: { name: "Strapi", icon: <SiStrapi color="blue" /> },
      react: { name: "React", icon: <FaReact color="32a89e" /> },
    };
  
    return technologies[tech] || { name: tech, icon: null }; // Fallback para casos não mapeados
  };

  export { getTechnologyDetails };