import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingScreen() {
  const [loadingStage, setLoadingStage] = useState(0);
  const loadingTexts = [
    "Preparing HR Solutions...",
    "Connecting Opportunities...",
    "Launching Tasha's Platform..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingStage((prev) => 
        prev < loadingTexts.length - 1 ? prev + 1 : prev
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-sky-50 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ 
          scale: [0.5, 1.1, 1], 
          rotate: [0, 10, 0],
          transition: { 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        className="w-32 h-32 bg-sky-500 rounded-full flex items-center justify-center mb-8 shadow-2xl"
      >
        <span className="text-4xl font-bold text-white">TM</span>
      </motion.div>

      <div className="space-y-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-sky-800"
        >
          Tasha Manoti HR Solutions
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={loadingStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-sky-600"
          >
            {loadingTexts[loadingStage]}
          </motion.p>
        </AnimatePresence>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 1,
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }
          }}
          className="w-64 h-1 bg-sky-300 origin-left"
        />
      </div>
    </motion.div>
  );
}

export default LoadingScreen;