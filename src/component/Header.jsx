import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.to("#hire", {
      scale: 1.3,
      repeat: -1,
      yoyo: true,             
      duration: 1.5,         
      ease: "elastic.out(1, 0.3)", 
    });
  }, []);
  

  return (
    <div>
      {/* Header with Toggle Button */}
      <div className="w-full z-50 fixed flex items-center justify-end p-5 md:p-10 pt-10 md:pt-16 text-white">
      <Link to="/hire-me">
          <button id='hire' className="bg-black border-4 px-4 py-1 mr-4 md:px-6 md:py-1 rounded-full hover:bg-gray-500 text-sm md:text-base">
            Hire Me
          </button>
        </Link>
        <CgMenuGridO
          onClick={toggleMenu}
          className="text-2xl md:text-3xl ml-2 md:ml-3 text-gray-400 cursor-pointer"
        />
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed z-50 h-full overflow-auto inset-0 bg-white">
          <div className="bg-black shadow-lg shadow-gray-400 text-white p-8 md:p-10 rounded-3xl m-4 md:m-10">
            {/* Social Icons */}
            <div className="flex justify-end">
              <div className="flex mt-2 space-x-4 text-2xl">
                {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <AiFillInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <AiFillLinkedin />
                </a>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <AiOutlineWhatsApp />
                </a>
                <a href="mailto:your-email@gmail.com" aria-label="Gmail">
                  <AiOutlineMail />
                </a> */}
                <button
                  onClick={toggleMenu}
                  className="bg-white text-black px-4 py-2 rounded-full text-sm md:text-base"
                >
                  Close
                </button>
              </div>
            </div>
            
            {/* Menu Links */}
            <div className="mt- space-y-8">
              <div className="flex justify-between border-b-2 items-center">
                <Link to="/" className="text-[10vw] leading-normal font-[anzo5]">HOME</Link>
                <span className="font-bold">01</span>
              </div>
              <div className="flex justify-between border-b-2 items-center">
                <Link to="/work" className="text-[10vw] font-[anzo5]">WORQ</Link>
                <span className="font-bold">02</span>
              </div>
              {/* <div className="flex justify-between border-b-2 items-center">
                <Link to="/colors" className="text-[10vw] font-[anzo5]">COLORS</Link>
                <span className="font-bold">03</span>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
