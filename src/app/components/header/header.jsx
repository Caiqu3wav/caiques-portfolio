'use client';
import './header.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Caique_wav_logo from "../../../../public/assets/images/caique_wav_logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import ToggleTheme from '../toggleTheme';
import { useTheme } from '@/app/context/ThemeContext';

function Header(){
  const [isActive, setIsActive] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1)

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
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 200
      const opacity = Math.max(0, Math.min(1, 1 - scrollY / maxScroll))
      setScrollOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


    return (
        <div>
            <header className='flex justify-between bg-gradient-to-b from-orange-400 dark:from-red-700 to-transparent'>
             <Image src={Caique_wav_logo} className='w-[100px]' alt='caique_wav logo'/>
                <nav className=''>
                    <ul className='midtw:hidden'>
<Link href='/'><li>Home</li></Link>
<Link href='#about'><li>Sobre</li></Link>
<Link href='#projects'><li>Projetos</li></Link>
<Link href='#contact'><li>Links</li></Link>
                    </ul>
                    <button aria-label="Open Menu" onClick={toggleMenu} className="btn-hamburguer hidden midtw:flex">
                <GiHamburgerMenu size={60} className="text-white dark:text-red-700" />
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
        className={`transform bg-gradient-to-b from-orange-400 to-orange-900 dark:from-red-700 dark:to-red-950 top-0 left-0 w-64 lowtwo2:w-44 lowthreetwo:w-36 text-white font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         
         {sideList.map(({ title, path }, index) => (
    <Link href={path} key={index}>
        <span className="flex items-center p-4 hover:bg-orange-500 dark:hover:bg-red-600 hover:text-black">
          <span className="border-b-4">{title}</span>
        </span>
    </Link>
  ))}
      </aside>
                </nav>
                <ToggleTheme/>
            </header>
            <div className="above_hero"></div>
        </div>
    );
}

export default Header;
