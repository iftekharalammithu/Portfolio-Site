import preloaderWords from "../../../Data/Preloder-Words";
import { motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";
import { useDimensions, useTimeOut } from "../../Hook";
import { fade, slideUp } from "./Varients";
import { Dot } from "lucide-react";

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MotionComponent = motion.create(Center);

export function Preloader() {
  const [index, setIndex] = useState(0);
  const { width, height } = useDimensions();

  useTimeOut({
    callback: () => {
      setIndex((prevIndex) => prevIndex + 1);
    },
    duration: index === 0 ? 500 : 250,
    deps: [index],
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <MotionComponent
      className="fixed z-50 h-screen w-screen cursor-default bg-foreground"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className="flex flex-col items-center justify-center text-center px-4"
            variants={fade}
            initial="initial"
            animate="enter"
          >
            <Dot size={48} className="mb-2" />
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {preloaderWords[index]}
            </p>
          </MotionComponent>
          <motion.svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full">
            <motion.path
              className="fill-foreground"
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}
