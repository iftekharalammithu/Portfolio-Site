import { motion } from "framer-motion";

import { slideUp } from "./variants";
import Name_Animate from "../Name_Animation/Name_Animate";
import { MoveDownRight } from "lucide-react";
import img from "../../assets/final2.png";

export function Header() {
  return (
    <motion.header
      className="relative h-[90vh]  bg-[#999D9E] overflow-hidden bg-secondary-foreground text-background"
      variants={slideUp}
      initial="initial"
      animate="enter"
    >
      <div className="relative  h-full">
        <div className="md:ml-auto ">
          <div className="mx-10 absolute right-0 mt-[200px]  max-md:my-12 md:mx-36">
            <div className="mb-4 md:mb-20 justify-end flex">
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className="text-[clamp(1.55em,2.5vw,2.75em)] text-right">
              <span className="block">Freelance</span>
              <span className="block">Full Stack Developer</span>
            </h4>
          </div>
        </div>
        {/* Image positioned at the bottom */}
        <img
          loading="lazy"
          // absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          className=" absolute  h-[866px] w-[866px] overflow-visible -bottom-16  -translate-x-1/2 left-1/2 transform " // Set the image to be at the bottom
          style={{
            filter: `
            drop-shadow(1px 0 1px white)
            drop-shadow(-1px 0 1px white)
            drop-shadow(0 1px 1px white)
            drop-shadow(0 -1px 1px white)
          `,
          }}
          src={img}
          alt="Mtihu"
        />
        <Name_Animate />
      </div>
    </motion.header>
  );
}
