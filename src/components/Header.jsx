import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
} from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["0rem", "2rem"]
  );

  return (
    <motion.header
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl backdrop-blur-lg shadow-lg z-50 overflow-hidden"
      style={{ borderRadius }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/icon.png"
            alt="Velocare Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-xl font-semibold text-blue-500 tracking-wide">
            Velocare
          </h1>
        </div>

        <nav className="hidden md:flex items-center relative">
          {navItems.map((item) => {
            const isActive = active === item.label;
            const isHovered = hovered === item.label;

            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-4 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
              >
                {(isHovered || isActive) && (
                  <motion.span
                    layoutId="desktopPill"
                    className="absolute inset-0 rounded-lg bg-white"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isHovered || isActive ? "text-blue-500" : "text-black/80"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <button className="hidden md:block px-4 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all cursor-pointer">
          Demo
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white cursor-pointer"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden backdrop-blur-md rounded-b-2xl overflow-hidden"
          >
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item) => {
                const isActive = active === item.label;
                const isHovered = hovered === item.label;

                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      setActive(item.label);
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setHovered(item.label)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative w-3/4 px-4 py-2 rounded-lg font-medium transition-colors duration-200 overflow-hidden cursor-pointer"
                  >
                    {(isHovered || isActive) && (
                      <motion.span
                        layoutId="mobilePill"
                        className="absolute inset-0 rounded-lg bg-white"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}

                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isHovered || isActive
                          ? "text-blue-500"
                          : "text-black/80"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}

              <button className="mt-4 px-4 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all cursor-pointer">
                Demo
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
