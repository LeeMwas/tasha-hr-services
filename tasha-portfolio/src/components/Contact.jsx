import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaUser,
  FaAt,
  FaComment
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      detail: "+254 715 123 310",
      color: "text-green-500",
      link: "https://wa.me/+254715123310"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      detail: "tashashrsolandservices@gmail.com",
      color: "text-sky-500",
      link: "mailto:tashashrsolandservices@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      detail: "Nairobi, Kenya",
      color: "text-red-500"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-sky-50/50 py-16 pt-24"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            Contact Tasha
          </h1>
          <p className="text-lg md:text-xl text-sky-600 max-w-2xl mx-auto">
            Get in Touch for HR Solutions and Career Guidance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-8 h-fit"
          >
            <h2 className="text-2xl font-semibold text-sky-800 mb-6">
              Contact Information
            </h2>
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10 }}
                className="flex items-center mb-4 space-x-4"
              >
                <method.icon className={`text-3xl ${method.color}`} />
                <div>
                  <h3 className="font-semibold text-sky-700">{method.title}</h3>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:text-sky-800"
                    >
                      {method.detail}
                    </a>
                  ) : (
                    <p className="text-sky-600">{method.detail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold text-sky-800 mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-500" />
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <FaAt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-500" />
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <FaComment className="absolute left-3 top-4 text-sky-500" />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;