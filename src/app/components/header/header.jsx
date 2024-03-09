'use client';
import './header.css';
import { useState, useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Caique_wav_logo from "../../../../public/assets/images/caique_wav_logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';

function Header(){
  const [isActive, setIsActive] = useState(false);

  const sideList = [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'Sobre',
        path: '#about',
      },
      {
        title: 'Projetos',
        path: '#projects',
      },
      {
        title: 'Contato',
        path: '#contact',
      },
    ];

  const toggleMenu = () => {
      setIsActive(!isActive);
  }

  useEffect(() => {
      const handleEscKeyPress = (e) => {
          if (e.keycode === 27 && isActive) {
              setIsActive(false);
          }
      };

      if (isActive) {
          document.body.style.setProperty("overflow", "hidden");
      }else {
          document.body.style.setProperty("overflow", "auto");
      }

      document.addEventListener("keydown", handleEscKeyPress);
      
      return () => {
          document.removeEventListener("keydown", handleEscKeyPress);
      };
  }, [isActive]);

    return (
        <div>
            <header className='flex justify-between'>
              <Link className='h-[90px] w-[100px]' href="/"><Image src={Caique_wav_logo} className='w-[100px] h-[90px]' alt='caique_wav logo'/></Link>
                <nav className='mr-[24%] majortwo1:mr-[18%] majortwo3:mr-[14%] majorthree2:mr-[8%]'>
                    <ul className='midtw:hidden'>
<Link href='/'><li>Home</li></Link>
<Link href='#about'><li>Sobre</li></Link>
<Link href='#projects'><li>Projetos</li></Link>
<Link href='#contact'><li>Links</li></Link>
                    </ul>
                    <button aria-label="Open Menu" onClick={toggleMenu} className="btn-hamburguer hidden ml-[70%] midtw:flex">
                <GiHamburgerMenu size={60} className="text-blue-400" />
</button>
{isActive && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsActive(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex="0"
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 lowtwo2:w-44 lowthreetwo:w-36 text-white font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         
         {sideList.map(({ title, path }, index) => (
    <Link href={path} key={index}>
        <span className="flex items-center p-4 hover:bg-blue-600 hover:text-black">
          <span className="border-b-4">{title}</span>
        </span>
    </Link>
  ))}
      </aside>
                </nav>
            </header>
            <div className="above_hero"></div>
        </div>
    );
}

export default Header;
