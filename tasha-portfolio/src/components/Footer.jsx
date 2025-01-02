import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { 
      Icon: FaWhatsapp, 
      href: "https://wa.me/+254715123310",
      color: "text-green-500"
    },
    { 
      Icon: FaInstagram, 
      href: "https://instagram.com/jobsupdatebytasha",
      color: "text-pink-500"
    },
    { 
      Icon: FaFacebook, 
      href: "https://facebook.com/jobsupdatebytasha",
      color: "text-blue-600"
    },
    { 
      Icon: FaLinkedin, 
      href: "https://linkedin.com/in/tashamanoti",
      color: "text-sky-600"
    }
  ];

  return (
    <footer className="bg-sky-50 text-sky-800 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-sky-600 mb-4">Contact Info</h3>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-sky-500" />
            <a 
              href="mailto:tashashrsolandservices@gmail.com" 
              className="hover:text-sky-700 transition"
            >
              tashashrsolandservices@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-sky-500" />
            <a 
              href="tel:+254715123310" 
              className="hover:text-sky-700 transition"
            >
              +254 715 123 310
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-sky-500" />
            <span>Nairobi, Kenya</span>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-sky-600 mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            {quickLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="hover:text-sky-500 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-sky-600 mb-4">Connect</h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href, color }, index) => (
              <motion.a 
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className={`${color} hover:opacity-80 transition`}
              >
                <Icon size={30} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-sky-100">
        <p className="text-sky-700">
          © {currentYear} Tasha's HR Solutions & Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;