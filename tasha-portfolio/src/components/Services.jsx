import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPlane, 
  FaFileAlt, 
  FaNotesMedical, 
  FaPlus, 
  FaWhatsapp, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook 
} from 'react-icons/fa';

function Services() {
  const serviceCategories = [
    {
      title: "Travel & Recruitment Services",
      icon: FaPlane,
      services: [
        "International and local flight bookings",
        "Hotel accommodations",
        "Local and international recruitments"
      ]
    },
    {
      title: "Documentation Services",
      icon: FaFileAlt,
      services: [
        "CV revamp and recommendation letters",
        "UAE, Qatar, and Turkey visit visa processing",
        "UAE visa change, ID, and freelance visa processing",
        "Fast-tracking of birth certificates, ID, death certificates"
      ]
    },
    {
      title: "Health-Related Certificates",
      icon: FaNotesMedical,
      services: [
        "Yellow fever vaccination and cards",
        "COVID certificates",
        "PCR tests",
        "Polio vaccines",
        "Medical letters and certificates"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-sky-50/50 py-16 pt-24"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            Tasha's HR Solutions & Services
          </h1>
          <p className="text-lg md:text-xl text-sky-600 max-w-2xl mx-auto">
            Unlocking Doors to Opportunity. Find Your Ideal Career Path with Us!
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="text-sky-500 text-4xl mr-4" />
                  <h2 className="text-xl font-semibold text-sky-800">
                    {category.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center text-sky-700"
                    >
                      <FaPlus className="text-sky-400 mr-2 text-sm" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-md p-8"
        >
          <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">
            Contact Tasha
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <a 
                href="https://wa.me/+254715123310" 
                className="text-sky-700 hover:text-sky-500 transition"
              >
                +254 715 123 310
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-sky-500 text-2xl" />
              <a 
                href="mailto:tashashrsolandservices@gmail.com"
                className="text-sky-700 hover:text-sky-500 transition"
              >
                tashashrsolandservices@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-8">
            {[
              { 
                Icon: FaInstagram, 
                color: "text-pink-500 hover:text-pink-600",
                link: "https://instagram.com/jobsupdatebytasha"
              },
              { 
                Icon: FaFacebook, 
                color: "text-blue-600 hover:text-blue-700",
                link: "https://facebook.com/jobsupdatebytasha"
              }
            ].map(({ Icon, color, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`${color} transition-all duration-300`}
              >
                <Icon className="text-3xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;