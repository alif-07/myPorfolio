import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // when you scroll down 100px or more, make navbar sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`w-full xl:py-6 bg-[#0D0D0D] xl:place-content-between text-xl flex xl:gap-10 ${isSticky ? 'place-content-between fixed top-0 left-0 z-50' : ''}`}
      style={{ transition: 'top 0.3s ease' }}
    >
      {/* Mohammad Alif - Visible only on larger screens */}
      <div className='xl:pl-10 hidden lg:block'>
        <Link to='home' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>Mohammad Alif</Link>
      </div>

      {/* Navigation links */}
      <div className='flex justify-center gap-5 sm:gap-6 md:gap-8 lg:gap-10 pl-10'>
        <Link to='home' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>Home</Link>
        <Link to='aboutme' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>About</Link>
        <Link to='services' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>Services</Link>
        <Link to='contact' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;
