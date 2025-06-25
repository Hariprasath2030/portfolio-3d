import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const TechCard = ({ technology, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 flex items-center justify-center cursor-pointer border border-gray-700 hover:border-[#04eaff] transition-all duration-300"
        whileHover={{ 
          scale: 1.1,
          rotateY: 15,
          boxShadow: "0 20px 40px rgba(4, 234, 255, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {/* 3D Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#04eaff]/20 to-[#915EFF]/20 rounded-2xl"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Tech Icon */}
        <motion.img
          src={technology.icon}
          alt={technology.name}
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain relative z-10"
          animate={{
            rotateY: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#04eaff] rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -20, -40],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            ))}
          </>
        )}
      </motion.div>
      
      {/* Tech Name Tooltip */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium border border-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10
        }}
        transition={{ duration: 0.2 }}
      >
        {technology.name}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-l border-t border-gray-600"></div>
      </motion.div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <section id="skills" className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#04eaff]/5 to-transparent"></div>
      
      <div className="w-full relative z-10">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technologies I Master</p>
          <h2 className={`${styles.sectionHeadText} text-center mb-4`}>
            <span className="bg-gradient-to-r from-[#04eaff] to-[#915EFF] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {technologies.map((technology, index) => (
            <TechCard
              key={technology.name}
              technology={technology}
              index={index}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeIn("up", "tween", 0.2, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Constantly learning and adapting to new technologies to create 
            <span className="text-[#04eaff] font-semibold"> cutting-edge solutions</span> that 
            push the boundaries of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");