import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const imageLinks = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3",
  "https://via.placeholder.com/300?text=Image+4",
  "https://via.placeholder.com/300?text=Image+5",
];

const Test = () => {
  return (
    <div className="bdr justify-center items-center">
      {imageLinks.map((image, index) => (
        <ImageWithScaleAnimation image={image} index={index} key={index} />
      ))}
    </div>
  );
};

const ImageWithScaleAnimation = ({ image, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 }); // Adjust the threshold as needed

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 });
    } else {
      controls.start({ scale: 1.3 });
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="sticky top-0 h-[800px] flex justify-center items-center overflow-hidden"
    >
      <motion.img
        src={image}
        alt={`Image ${index + 1}`}
        className="h-[600px] w-[600px] absolute "
        style={{ zIndex: index }}
        animate={controls}
        initial={{ scale: 1.3 }}
        transition={{ duration: 0.5 }} // Adjust the duration as needed
        whileHover={{ scale: 1.1 }} // Add hover effect
      />
    </div>
  );
};

export default Test;
