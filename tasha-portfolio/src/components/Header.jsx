import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcase,
  FaUser,
  FaEnvelope
} from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation Items with Icons
  const navItems = [
    { name: 'Home', link: '/', icon: FaHome },
    { name: 'Services', link: '/services', icon: FaBriefcase },
    { name: 'About', link: '/about', icon: FaUser },
    { name: 'Contact', link: '/contact', icon: FaEnvelope }
  ];

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Variants
  const headerVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.4
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        type: 'spring',
        stiffness: 300
      }
    })
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg backdrop-blur-md'
          : 'bg-gradient-to-r from-sky-400 to-indigo-400 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden" // Added overflow-hidden to contain the image
            >
              {/* Replace <FaUser /> with your image */}
              <img
                src="/images/tashablue logo.jpeg" // Your image path
                alt="Tasha Manoti Profile"
                className="w-full h-full object-cover object-center" // Ensure the image covers the circular container
              />
            </motion.div>
            <span className="text-white font-bold text-xl tracking-wider">
              Natasha Manoti
            </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center space-x-2 text-white hover:text-sky-200 transition-all group"
            >
              <item.icon className="group-hover:rotate-12 transition-transform" />
              <span className="group-hover:tracking-wider transition-all">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ rotate: 180 }}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden fixed inset-0 bg-gradient-to-b from-sky-500 to-indigo-500 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col h-full justify-center items-center space-y-8"
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-6 right-6 text-white"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 180 }}
              >
                <FaTimes size={30} />
              </motion.button>

              {/* Mobile Menu Items */}
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-4 text-white text-2xl hover:text-sky-200 transition-all"
                >
                  <item.icon className="text-sky-200" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;