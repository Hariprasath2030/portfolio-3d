import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-8`}
      >
        {/* Left Dot and Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#04eaff]" />
          <div className="w-1 h-32 sm:h-80 violet-gradient" />
        </div>

        {/* Heading and Description */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-[2rem] sm:text-[3.5rem]`}>
            Hi, I'm <span className="text-[#04eaff]">Hariprasath</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-[0.9rem] sm:text-[1rem]`}>
            I developed 3D visual Portfolio<br className="hidden sm:block" />
          </p>
        </div>
      </div>

      {/* Download Button in the Right Corner */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute bottom-10 right-10 flex items-center justify-center"
      >
        <a
          href="/public/HARIPRASATH_R.pdf" // Ensure this file is in the public folder
          download
          className="group flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-black bg-[#04eaff] rounded-lg shadow-md transition-all duration-300 hover:bg-white"
        >
          Download Resume
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
          >
            <FaArrowDown className="text-black" />
          </motion.span>
        </a>
      </motion.div>

      {/* 3D Canvas */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
