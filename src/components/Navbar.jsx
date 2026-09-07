import React, { useEffect, useState } from "react";
import LOGO from "../assets/images/logo.png";
import { MENU_LINKS } from "../utils/data";
import { Link } from 'react-scroll';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
  const handleResize = () => {
    const isDesktop = window.innerWidth >= 768;
    setIsOpen(isDesktop); // True for desktop, false for mobile
  };

  // Run once on mount
  handleResize();

  // Add event listener (with debounce for performance)
  let resizeTimeout;
  const debouncedResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 150);
  };

  window.addEventListener("resize", debouncedResize);

  // Cleanup on unmount
  return () => {
    clearTimeout(resizeTimeout);
    window.removeEventListener("resize", debouncedResize);
  };
}, []);

  return (
    <nav className="container mx-auto sticky top-5 z-50 mt-2">
  <div className="flex items-center justify-between rounded-full bg-white/30 border border-[#cdccfe]/70 backdrop-blur-[12px] shadow-md px-4 md:px-6 py-2 transition-all duration-300">
    {/* Logo */}
    <img
      className="h-8 md:h-10 ml-2 md:ml-4 hover:scale-105 transition-transform duration-300"
      src={LOGO}
      alt="Logo"
    />

        {/* Hamburger Icon (Visible only on small screens) */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="block md:hidden text-primary hover:text-secondary 
             focus:outline-none transition-colors duration-300 
             p-2 rounded-lg hover:bg-primary/10 active:scale-95 mr-4"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links*/}
        <ul
          className={`
        ${isOpen ? "flex" : "hidden"} 
        menu-wrapper`}
        >
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire me Button*/}
        <Link
          to="contact"
          smooth
          spy
          offset={-80}
          className="hidden md:block cursor-pointer text-[15px] font-medium text-white
         bg-gradient-to-r from-primary to-secondary
         rounded-full px-9 py-3
         transition-transform duration-300 ease-in-out
         hover:scale-105 hover:shadow-lg"
        >
          Hire Me
        </Link>
      </div>
    </nav >
  )
}

export default Navbar