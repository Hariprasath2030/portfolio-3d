import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#04eaff]' />
          <div className='w-1 h-32 sm:h-80 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-[2rem] sm:text-[3.5rem]`}>
            Hi, I'm <span className='text-[#04eaff]'>Hariprasath</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-[0.9rem] sm:text-[1rem]`}
          >
            I develop 3D visual Portfolios<br className='hidden sm:block' />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-20 sm:bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[28px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
