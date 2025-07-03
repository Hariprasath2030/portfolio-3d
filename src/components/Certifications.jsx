import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { FaCertificate, FaAward, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Advanced Spring Boot Development",
    issuer: "Infosys Springboard",
    date: "October 2024 - December 2024",
    description: "Comprehensive certification covering enterprise-level Spring Boot application development, RESTful API design, Spring Security implementation, and microservices architecture.",
    skills: ["Spring Boot", "Spring Security", "RESTful APIs", "Microservices", "JPA/Hibernate"],
    credentialId: "SB-2024-SPRING-001",
    verifyLink: "#",
    color: "from-green-400 to-blue-500"
  },
  {
    title: "Advanced MERN Stack Development",
    issuer: "Infosys Springboard",
    date: "September 2024 - October 2024",
    description: "Full-stack web development certification focusing on MongoDB, Express.js, React.js, and Node.js ecosystem with modern development practices and deployment strategies.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication"],
    credentialId: "SB-2024-MERN-002",
    verifyLink: "#",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Frontend Development Specialization",
    issuer: "Sekel Tech",
    date: "June 2024 - Present",
    description: "Specialized training in modern frontend technologies including React.js, Three.js, Framer Motion, and advanced UI/UX implementation with performance optimization.",
    skills: ["React.js", "Three.js", "Framer Motion", "TypeScript", "Performance Optimization"],
    credentialId: "ST-2024-FE-003",
    verifyLink: "#",
    color: "from-cyan-400 to-blue-600"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Cognifyz Technologies",
    date: "June 2023 - April 2024",
    description: "Comprehensive web development certification covering both frontend and backend technologies with hands-on project experience and industry best practices.",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Responsive Design"],
    credentialId: "CT-2024-FS-004",
    verifyLink: "#",
    color: "from-orange-400 to-red-500"
  }
];

const CertificationCard = ({ certification, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl border border-gray-700 hover:border-[#04eaff] transition-all duration-500 cursor-pointer overflow-hidden"
        whileHover={{ 
          y: -10,
          boxShadow: "0 25px 50px rgba(4, 234, 255, 0.2)"
        }}
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${certification.color} opacity-10 rounded-3xl`}
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
            scale: isHovered ? 1.02 : 1
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-start justify-between mb-3">
            <motion.div
              className="p-3 bg-gradient-to-r from-[#04eaff] to-[#915EFF] rounded-2xl"
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.6 }}
            >
              <FaCertificate className="text-white text-xl" />
            </motion.div>
            
            <motion.button
              className="p-2 bg-gray-700 rounded-full hover:bg-[#04eaff] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(certification.verifyLink, "_blank")}
            >
              <FaExternalLinkAlt className="text-white text-sm" />
            </motion.button>
          </div>

          <motion.h3 
            className="text-white font-bold text-xl mb-2"
            animate={{
              color: isHovered ? "#04eaff" : "#ffffff"
            }}
            transition={{ duration: 0.3 }}
          >
            {certification.title}
          </motion.h3>
          
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
            <FaAward className="text-[#915EFF]" />
            <span>{certification.issuer}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaCalendarAlt className="text-[#04eaff]" />
            <span>{certification.date}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
          {certification.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
          {certification.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              className="text-xs px-3 py-1 bg-gray-700 text-[#04eaff] rounded-full border border-gray-600 hover:border-[#04eaff] transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1
              }}
              transition={{ 
                duration: 0.3, 
                delay: skillIndex * 0.1
              }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Credential ID */}
        <div className="text-xs text-gray-500 font-mono relative z-10">
          ID: {certification.credentialId}
        </div>

        {/* Floating Elements */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#04eaff] rounded-full"
                style={{
                  right: `${10 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -30],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#915EFF]/5 to-transparent"></div>
      
      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Professional Achievements</p>
          <h2 className={`${styles.sectionHeadText} text-center mb-4`}>
            <span className="bg-gradient-to-r from-[#915EFF] to-[#04eaff] bg-clip-text text-transparent">
              Certifications & Training
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="w-full flex justify-center"
        >
          <p className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-center">
            Continuous learning and professional development through industry-recognized 
            certifications and specialized training programs that enhance my technical expertise 
            and keep me updated with the latest technologies and best practices.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={`certification-${index}`}
              certification={certification}
              index={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={fadeIn("up", "tween", 0.2, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { number: "4+", label: "Certifications" },
            { number: "2+", label: "Years Learning" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Completion Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-gray-800/50 rounded-2xl border border-gray-700"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#04eaff"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#04eaff] mb-2">{stat.number}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Certifications, "certifications");