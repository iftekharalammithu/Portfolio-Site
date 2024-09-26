import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import navItems from "../../Data/Nav-items";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative ">
      {/* Toggle button */}
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Animated dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute rounded-md  z-10 top-full right-0 bg-opacity-20 bg-white-600 backdrop-filter backdrop-blur-lg bg-clip-padding border border-gray-100"
          >
            <nav className="flex  flex-col">
              {navItems.slice(1).map(({ href, title }) => (
                <a
                  key={title}
                  href={`${href.toLowerCase()}`}
                  className="px-4 py-2 capitalize hover:bg-gray-100"
                >
                  {title}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
