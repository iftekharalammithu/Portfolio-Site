import { NavbarBrand } from "./NavbarBrand";
import { NavbarList } from "./NavbarList";
import { motion } from "framer-motion";
import { slideDown } from "./Varient";
import NavbarMobile from "./NavbarMobile";

export function Navbar() {
  return (
    <motion.header
      variants={slideDown} // Apply the modified variant
      initial="initial"
      animate="enter"
    >
      <nav className="bg-[#999D9E]   inset-x-0 top-0 z-10 ">
        <div className="flex items-center mx-2 md:mx-3 lg:mx-5   justify-between md:px-8 md:py-4  text-background">
          <NavbarBrand />
          <div className="hidden md:block">
            <NavbarList />
          </div>
          <div className="md:hidden">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
