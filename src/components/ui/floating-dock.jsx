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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 5,
                  transition: { delay: idx * 0.02 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.02 }}
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
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900/90 backdrop-blur-md border border-gray-600/50 hover:border-[#00ff88] hover:bg-gray-800/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 8px 18px rgba(0, 255, 136, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="h-5 w-5">{item.icon}</div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900/90 backdrop-blur-md border border-gray-600/50 hover:border-[#00ff88] hover:bg-gray-800/90 transition-all duration-200 shadow-lg hover:shadow-xl"
        whileHover={{
          scale: 1.1,
          rotate: open ? 180 : 0,
        }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-[#00ff88]" />
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
        "mx-auto hidden h-20 items-end gap-6 rounded-3xl bg-gray-900/40 backdrop-blur-md px-6 pb-4 md:flex border border-gray-600/30 hover:border-[#00ff88]/60 transition-all duration-200 shadow-xl hover:shadow-2xl",
        className
      )}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 15px 25px rgba(0, 255, 136, 0.25)",
      }}
      transition={{ duration: 0.15 }}
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
      mass: 0.1,
      stiffness: 200,
      damping: 15,
    }
  );
  const height = useSpring(
    useTransform(distance, [-150, 0, 150], [50, 90, 50]),
    {
      mass: 0.1,
      stiffness: 200,
      damping: 15,
    }
  );

  const widthIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [24, 48, 24]),
    {
      mass: 0.1,
      stiffness: 200,
      damping: 15,
    }
  );
  const heightIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [24, 48, 24]),
    {
      mass: 0.1,
      stiffness: 200,
      damping: 15,
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 hover:border-[#00ff88] hover:bg-gray-700/60 transition-all duration-200 shadow-lg hover:shadow-xl"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 20px rgba(0, 255, 136, 0.25)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff88]/20 to-[#ff6b35]/20"
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.12 }}
        />

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.85 }}
              animate={{ opacity: 1, y: -6, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.85 }}
              className="absolute -top-12 left-1/2 w-fit rounded-lg border border-[#00ff88]/40 bg-gray-900/95 backdrop-blur-md px-3 py-1.5 text-sm font-medium whitespace-pre text-white shadow-xl"
              transition={{ duration: 0.12 }}
            >
              <span className="bg-gradient-to-r from-[#00ff88] to-[#ff6b35] bg-clip-text text-transparent">
                {title}
              </span>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
          animate={{
            rotate: hovered ? [0, -4, 4, 0] : 0,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>

        {/* Ripple effect */}
        {hovered && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00ff88]"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    </motion.a>
  );
}
