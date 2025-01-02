import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserTie, 
  FaAward, 
  FaUniversity, 
  FaCheckCircle 
} from 'react-icons/fa';

function About() {
  const professionalSkills = [
    "HR Strategy Development",
    "Talent Acquisition",
    "Employee Relations",
    "Recruitment Consulting",
    "Visa Processing",
    "Career Guidance"
  ];

  const professionalExperience = [
    {
      title: "HR Consultant",
      company: "Global Recruitment Solutions",
      duration: "2018 - Present",
      description: "Leading comprehensive HR and recruitment services with a focus on international placements."
    },
    {
      title: "Senior Recruitment Specialist",
      company: "Career Bridge International",
      duration: "2015 - 2018",
      description: "Specialized in cross-border recruitment and visa processing services."
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
        {/* About Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            About Tasha Manoti
          </h1>
          <p className="text-lg md:text-xl text-sky-600 max-w-2xl mx-auto">
            Dedicated HR Professional Committed to Transforming Career Paths
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Profile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <FaUserTie className="text-sky-500 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-sky-800">
                Professional Profile
              </h2>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-sky-700 mb-4"
            >
              With over 8 years of experience in HR and recruitment, I specialize in connecting talented professionals with exceptional opportunities across various industries.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-sky-700 mb-3">
                Professional Skills
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {professionalSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-sky-600"
                  >
                    <FaCheckCircle className="text-sky-400 mr-2" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <FaAward className="text-sky-500 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-sky-800">
                Professional Experience
              </h2>
            </motion.div>

            {professionalExperience.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="mb-4 pb-4 border-b border-sky-100 last:border-b-0"
              >
                <h3 className="text-xl font-semibold text-sky-700">
                  {exp.title}
                </h3>
                <p className="text-sky-600 mb-2">
                  {exp.company} | {exp.duration}
                </p>
                <p className="text-sky-700">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <FaUniversity className="text-sky-500 text-4xl mr-4" />
            <h2 className="text-2xl font-semibold text-sky-800">
              Educational Background
            </h2>
          </div>
          <div className="text-sky-700">
            <p>
              Bachelor's Degree in Human Resource Management
              <span className="text-sky-600 ml-2">(University Name, Year)</span>
            </p>
            <p className="mt-2">
              Certified HR Professional
              <span className="text-sky-600 ml-2">(Certification Body, Year)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;