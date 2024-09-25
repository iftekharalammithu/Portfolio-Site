import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const imageLinks = [
  { name: "Image1", link: "https://via.placeholder.com/300?text=Image+1" },
  { name: "Image 2", link: "https://via.placeholder.com/300?text=Image+2" },
  { name: "Image 3", link: "https://via.placeholder.com/300?text=Image+3" },
  { name: "Image 4", link: "https://via.placeholder.com/300?text=Image+4" },
  { name: "Image 5", link: "https://via.placeholder.com/300?text=Image+5" },
];

const Work = () => {
  return (
    <div id="work" className=" my-20 bdr justify-center items-center">
      {imageLinks.map((image, index) => (
        <ImageWithScaleAnimation
          image={image.link}
          name={image.name}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
};

const ImageWithScaleAnimation = ({ image, index, name }) => {
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
      className="sticky top-0 h-[800px]  flex justify-center items-center overflow-hidden"
    >
      <motion.img
        onClick={() => {
          // console.log("clicked", index, image);
          window.open(name, "_blank");
        }}
        src={image}
        alt={`Image ${index + 1}`}
        className="h-[600px] w-[600px] absolute  "
        style={{ zIndex: index }}
        animate={controls}
        initial={{ scale: 1 }}
        transition={{ duration: 0.5 }} // Adjust the duration as needed
        whileHover={{ scale: 1.1 }} // Add hover effect
      />
    </div>
  );
};

export default Work;
