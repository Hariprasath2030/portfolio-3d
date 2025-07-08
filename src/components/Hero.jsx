import { motion } from "framer-motion";
import { styles } from "../styles";
import { FloatingElements } from "./canvas";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Hero = () => {
  const dockLinks = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-[#00ff88] hover:text-[#ff6b35] transition-colors duration-300" />
      ),
      href: "https://linkedin.com/in/hariprasath-r",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-[#00ff88] hover:text-[#ff6b35] transition-colors duration-300" />
      ),
      href: "https://github.com/Hariprasath2030",
    },
  ];

  return (
    <section className="relative w-full h-[140vh] mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>
      <FloatingElements />
      <div
        className={`absolute inset-0 top-[50px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center z-10`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex flex-col items-start">
            <div className="flex items-start gap-5">
              <div className="flex flex-col justify-center items-center mt-5">
                <motion.div
                  className="w-5 h-5 rounded-full bg-gradient-to-r from-[#00ff88] to-[#ff6b35]"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(0, 255, 136, 0.7)",
                      "0 0 0 10px rgba(0, 255, 136, 0)",
                      "0 0 0 0 rgba(0, 255, 136, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-1 h-40 sm:h-80 bg-gradient-to-b from-[#00ff88] to-transparent"
                  initial={{ height: 0 }}
                  animate={{ height: ["0px", "320px"] }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <h1 className={`${styles.heroHeadText} text-white mb-4`}>
                    Hi, I'm{" "}
                    <motion.span
                      className="bg-gradient-to-r from-[#00ff88] to-[#ff6b35] bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      Hariprasath
                    </motion.span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <p
                    className={`${styles.heroSubText} mt-2 text-white-100 max-w-3xl`}
                  >
                    Full Stack Developer specializing in{" "}
                    <motion.span
                      className="text-[#00ff88] font-semibold"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      3D Interactive Experiences
                    </motion.span>
                    <br className="sm:block hidden" />
                    Crafting modern, scalable web apps with sleek animations and
                    strong backends.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-[#00ff88] to-[#ff6b35] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 255, 136, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore My Work
                  </motion.button>

                  <motion.button
                    className="px-8 py-3 border-2 border-[#00ff88] text-[#00ff88] font-semibold rounded-full hover:bg-[#00ff88] hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Get In Touch
                  </motion.button>
                </motion.div>

                <motion.div
                  className="flex justify-center sm:justify-start mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  <FloatingDock
                    mobileClassName="translate-y-0"
                    desktopClassName="bg-gray-900/30 backdrop-blur-md border border-[#00ff88]/20 hover:border-[#00ff88]/40 transition-all duration-300"
                    items={dockLinks}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="relative w-80 h-80 sm:w-96 sm:h-96"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(15deg) rotateY(15deg)",
                }}
                whileHover={{
                  transform: "rotateX(20deg) rotateY(20deg) scale(1.05)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-4 bg-gradient-to-br from-[#00ff88]/10 to-[#ff6b35]/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-[#00ff88] to-[#ff6b35] rounded-full mb-4 flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <span className="text-2xl font-bold text-white">H</span>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-300 text-sm mb-1">
                    Working @Sekel Tech
                  </p>
                  <p className="text-[#00ff88] text-xs">3D Design Specialist</p>

                  {/* Floating particles around card */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#00ff88] rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
