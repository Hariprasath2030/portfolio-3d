import { cn } from "../../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

// MAIN WRAPPER
export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// MOBILE VERSION
const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-row gap-2 justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  scale: 0.8,
                  transition: { delay: idx * 0.01, duration: 0.08 },
                }}
                transition={{ 
                  delay: (items.length - 1 - idx) * 0.01, 
                  duration: 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.a
                  href={item.href}
                  target={
                    item.href.startsWith("http") || item.href.endsWith(".pdf")
                      ? "_blank"
                      : "_self"
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900/90 backdrop-blur-md border border-gray-600/50 hover:border-[#00ff88] hover:bg-gray-800/90 transition-all duration-100 shadow-lg hover:shadow-xl"
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    y: -3,
                    boxShadow: "0 12px 25px rgba(0, 255, 136, 0.4)",
                    transition: { duration: 0.1 }
                  }}
                  whileTap={{ 
                    scale: 0.9,
                    rotate: 15,
                    transition: { duration: 0.05 }
                  }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    y: {
                      duration: 1.5 + idx * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.1
                    }
                  }}
                >
                  <motion.div 
                    className="h-5 w-5"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.15 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900/90 backdrop-blur-md border border-gray-600/50 hover:border-[#00ff88] hover:bg-gray-800/90 transition-all duration-100 shadow-lg hover:shadow-xl"
        whileHover={{
          scale: 1.15,
          y: -3,
          boxShadow: "0 12px 25px rgba(0, 255, 136, 0.4)",
          transition: { duration: 0.1 }
        }}
        whileTap={{ 
          scale: 0.9,
          transition: { duration: 0.05 }
        }}
        animate={{ 
          rotate: open ? 45 : 0,
          y: [0, -2, 0]
        }}
        transition={{ 
          rotate: { duration: 0.1 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={{
            rotate: open ? 180 : 0,
            scale: open ? 1.1 : 1
          }}
          transition={{ duration: 0.1 }}
        >
          <IconLayoutNavbarCollapse className="h-5 w-5 text-[#00ff88]" />
        </motion.div>
      </motion.button>
    </div>
  );
};

// DESKTOP VERSION
const FloatingDockDesktop = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-20 items-end gap-6 rounded-3xl bg-gray-900/40 backdrop-blur-md px-6 pb-4 md:flex border border-gray-600/30 hover:border-[#00ff88]/60 transition-all duration-150 shadow-xl hover:shadow-2xl",
        className
      )}
      whileHover={{
        scale: 1.02,
        y: -2,
        boxShadow: "0 20px 35px rgba(0, 255, 136, 0.3)",
        transition: { duration: 0.1 }
      }}
      animate={{
        y: [0, -1, 0],
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

// ICON ELEMENT
function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(
    useTransform(distance, [-150, 0, 150], [50, 90, 50]),
    {
      mass: 0.05,
      stiffness: 300,
      damping: 20,
    }
  );
  const height = useSpring(
    useTransform(distance, [-150, 0, 150], [50, 90, 50]),
    {
      mass: 0.05,
      stiffness: 300,
      damping: 20,
    }
  );

  const widthIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [24, 48, 24]),
    {
      mass: 0.05,
      stiffness: 300,
      damping: 20,
    }
  );
  const heightIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [24, 48, 24]),
    {
      mass: 0.05,
      stiffness: 300,
      damping: 20,
    }
  );

  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target={
        href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : "_self"
      }
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.08, ease: "easeOut" }
      }}
      whileTap={{
        y: 0,
        scale: 0.95,
        transition: { duration: 0.05 }
      }}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 hover:border-[#00ff88] hover:bg-gray-700/60 transition-all duration-100 shadow-lg hover:shadow-xl"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 15px 30px rgba(0, 255, 136, 0.35)",
          transition: { duration: 0.08 }
        }}
        whileTap={{ 
          scale: 0.9,
          transition: { duration: 0.05 }
        }}
        animate={{
          y: [0, -1, 0],
          rotate: hovered ? [0, -2, 2, 0] : 0
        }}
        transition={{
          y: {
            duration: 2 + Math.random(),
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 0.5
          },
          rotate: {
            duration: 0.3,
            ease: "easeInOut"
          }
        }}
      >
        {/* Enhanced Background glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff88]/20 to-[#ff6b35]/20"
          animate={{ 
            opacity: hovered ? 1 : 0, 
            scale: hovered ? 1.1 : 1,
            rotate: hovered ? 180 : 0
          }}
          transition={{ duration: 0.08 }}
        />

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: -8, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.8 }}
              className="absolute -top-14 left-1/2 w-fit rounded-lg border border-[#00ff88]/40 bg-gray-900/95 backdrop-blur-md px-3 py-1.5 text-sm font-medium whitespace-pre text-white shadow-xl z-50"
              transition={{ duration: 0.08 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-[#00ff88] to-[#ff6b35] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {title}
              </motion.span>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center relative z-10"
          animate={{
            rotate: hovered ? [0, -8, 8, 0] : 0,
            scale: hovered ? 1.1 : 1,
          }}
          transition={{ 
            duration: 0.15, 
            ease: "easeOut"
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.2 }
            }}
            animate={{
              rotate: hovered ? [0, 5, -5, 0] : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        </motion.div>

        {/* Enhanced Ripple effect */}
        {hovered && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00ff88]"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-[#ff6b35]"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 1.4, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            />
          </>
        )}

        {/* Floating particles */}
        {hovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00ff88] rounded-full"
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -20],
                  x: [0, (i - 1) * 10],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.a>
  );
}