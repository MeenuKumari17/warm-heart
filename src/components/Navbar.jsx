import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  { name: 'Home', id: 'home' },
  { name: 'Collections', id: 'collection' },
  { name: 'Featured', id: 'featured' },
  { name: 'Custom', id: 'custom-order' },
];

const Navbar = ({ cartCount = 0, onCartClick }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Only enable scroll highlighting on homepage
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        for (let tab of tabs) {
          const section = document.getElementById(tab.id);
          if (
            section &&
            window.scrollY >= section.offsetTop - 100 &&
            window.scrollY < section.offsetTop + section.offsetHeight - 100
          ) {
            setActiveTab(tab.id);
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setActiveTab(null); // No active tab on other pages
    }
  }, [location.pathname]);

const handleTabClick = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // close mobile menu if open
  }
};


  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold tracking-wide text-gray-900 cursor-pointer"
          onClick={handleLogoClick}
        >
          MyBrand
        </h1>

        {/* Desktop Tabs */}
        <ul className="hidden md:flex space-x-6 text-lg relative text-gray-800">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="relative cursor-pointer px-4 py-2 transition duration-300"
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-teal-100"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeTab === tab.id ? 'text-teal-600 font-semibold' : ''
                }`}
              >
                {tab.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl transition-all duration-300 hover:scale-110 hover:text-pink-400 hover:rotate-12"
          >
            <FaInstagram className="text-[28px] hover:spin-once" />
          </a>
          <a
            href="https://wa.me/yourwhatsapplink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl transition-all duration-300 hover:scale-110 hover:text-green-400 hover:rotate-12"
          >
            <FaWhatsapp className="text-[28px] hover:spin-once" />
          </a>

          <button
            onClick={onCartClick}
            className="relative text-black text-xl transition-all duration-300 hover:scale-110 hover:text-teal-500 hover:rotate-12"
          >
            <FiShoppingCart className="text-[28px] hover:spin-once" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-teal-600 font-bold text-xs px-2 py-0.5 rounded-full shadow">
                {cartCount}
              </span>
            )}
          </button>

          <div className="md:hidden ml-2">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

{isOpen && (
  <div className="md:hidden bg-white/60 backdrop-blur-md px-6 py-4 space-y-3 text-lg text-gray-900">
    {tabs.map((tab) => (
      <div
        key={tab.id}
        onClick={() => handleTabClick(tab.id)}
        className={`cursor-pointer px-3 py-1 rounded-full ${
          activeTab === tab.id ? 'bg-teal-100 text-teal-600 font-medium' : ''
        } hover:text-teal-600 transition`}
      >
        {tab.name}
      </div>
    ))}
  </div>
)}


    </nav>
  );
};

export default Navbar;
