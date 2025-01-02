import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-sky-800 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-20 flex items-center justify-between relative z-10"
      >
        {/* Left Side Content */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-sky-600">
            Tasha Manoti
          </h1>
          <h2 className="text-3xl font-semibold text-sky-500">
            Human Resources Professional
          </h2>
          <p className="text-lg text-gray-700">
            Dedicated HR specialist with expertise in talent management, 
            recruitment, and organizational development.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <motion.a 
              href="https://linkedin.com/in/tashamanoti"
              whileHover={{ scale: 1.1 }}
              className="text-sky-600 hover:text-sky-800"
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a 
              href="mailto:tasha.manoti@email.com"
              whileHover={{ scale: 1.1 }}
              className="text-sky-600 hover:text-sky-800"
            >
              <FaEnvelope size={30} />
            </motion.a>
            <motion.a 
              href="tel:+1234567890"
              whileHover={{ scale: 1.1 }}
              className="text-sky-600 hover:text-sky-800"
            >
              <FaPhone size={30} />
            </motion.a>
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sky-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-600 transition"
            >
              Download CV
            </motion.button>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-sky-500 text-sky-500 px-6 py-3 rounded-full hover:bg-sky-50 transition"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-1/2 flex justify-end"
        >
          <motion.div 
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="w-1/2 flex justify-end"
>
  <div className="w-96 h-96 bg-sky-100 rounded-full overflow-hidden shadow-2xl">
        <img 
        src="/images/tasha.jpg" 
        alt="Tasha Manoti Profile"
        className="w-full h-full object-cover object-center"
        />
  </div>
</motion.div>
        </motion.div>
      </motion.div>

      {/* Background Design */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-sky-100 rounded-bl-full"></div>
      </div>
    </div>
  );
}

export default HomePage;