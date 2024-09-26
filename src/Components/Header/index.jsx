import { motion } from "framer-motion";

import { slideUp } from "./variants";
import Name_Animate from "../Name_Animation/Name_Animate";
import { MoveDownRight } from "lucide-react";
import img from "../../assets/final2.png";

export function Header() {
  return (
    <motion.header
      className="relative h-[90vh] bg-[#999D9E] overflow-hidden bg-secondary-foreground text-background"
      variants={slideUp}
      initial="initial"
      animate="enter"
    >
      <div className="relative h-full flex flex-col justify-between">
        <div className="flex mt-14 flex-col items-end p-4 sm:p-8 md:p-12 lg:p-16">
          <div className="mb-4 md:mb-8">
            <MoveDownRight size={28} strokeWidth={1.25} />
          </div>
          <h4 className="text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="block">Freelance</span>
            <span className="block">Full Stack Developer</span>
          </h4>
        </div>
        <div className="relative flex-grow">
          <img
            loading="lazy"
            className="absolute w-full max-w-[866px] h-auto max-h-[80vh] object-contain bottom-0 left-1/2 transform -translate-x-1/2"
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
        </div>
        <Name_Animate />
      </div>
    </motion.header>
  );
}
