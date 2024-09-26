import { NavbarBrand } from "./NavbarBrand";
import { NavbarList } from "./NavbarList";
import { motion } from "framer-motion";
import { slideDown } from "./Varient";

export function Navbar() {
  return (
    <motion.header
      variants={slideDown} // Apply the modified variant
      initial="initial"
      animate="enter"
    >
      <nav className="bg-[#999D9E]   inset-x-0 top-0 z-10 ">
        <div className="flex items-center mx-5   justify-between px-8 py-4  text-background">
          <NavbarBrand />
          <NavbarList />
        </div>
      </nav>
    </motion.header>
  );
}
