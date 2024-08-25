import { useTheme } from '@/app/context/ThemeContext';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

export default function ToggleTheme() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button className='mr-4' onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
      {darkMode ? <MdOutlineLightMode size={30} color="white" /> : <MdDarkMode size={30} color="yellow" />}
    </button>
  );
}
