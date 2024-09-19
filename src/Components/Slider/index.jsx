import { motion } from "framer-motion";

import { useParallaxSlider } from "../Hook";
import { Fragment } from "react";

export function ParallaxSlider({ children, repeat = 2, baseVelocity }) {
  const x = useParallaxSlider(baseVelocity);

  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }}>
        {Array.from({ length: repeat }, () => {
          const id = crypto.randomUUID();
          return <Fragment key={id}>{children}</Fragment>;
        })}
      </motion.div>
    </div>
  );
}
