import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications",
      icon: "🌐"
    },
    {
      title: "Mobile Development", 
      description: "Cross-platform mobile apps",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Modern and responsive designs", 
      icon: "🎨"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 via-transparent to-[#ff6b35]/5"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 via-transparent to-[#ff6b35]/5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Profile Section */}
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-3xl font-bold mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="bg-gradient-to-r from-[#00ff88] to-[#ff6b35] bg-clip-text text-transparent">
                Bhupesh Patil
              </span>
            </motion.h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Computer Engineer specializing in full-stack development with expertise in 
              <span className="text-[#00ff88] font-semibold"> MERN stack</span> and 
              <span className="text-[#ff6b35] font-semibold"> DSA problem solving</span>. 
              Passionate about creating innovative solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-3 text-gray-300 hover:text-[#00ff88] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-[#00ff88]" />
                <a href="mailto:bhupeshsabe123@gmail.com" className="hover:underline">
                  bhupeshsabe123@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-gray-300 hover:text-[#00ff88] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="text-[#00ff88]" />
                <a href="tel:+919404307254" className="hover:underline">
                  +91 9404307254
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="text-[#00ff88]" />
                <span>Dhule, Maharashtra, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#00ff88]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff6b35] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#00ff88] rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#00ff88]">Services</h4>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700 hover:border-[#00ff88]/30">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h5 className="font-semibold text-white group-hover:text-[#00ff88] transition-colors duration-300">
                        {service.title}
                      </h5>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Bottom Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p 
            className="text-gray-400 text-center md:text-left flex items-center gap-2"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            © 2025 Bhupesh Patil. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="text-gray-400 text-center md:text-right flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Built with 
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ["#ff6b35", "#00ff88", "#ff6b35"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            using React & Framer Motion
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#00ff88] to-[#ff6b35] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;