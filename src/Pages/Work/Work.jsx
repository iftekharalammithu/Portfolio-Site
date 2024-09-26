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
    <div id="work" className=" pt-20  justify-center bg-slate-200 items-center">
      {imageLinks.map((image, index) => (
        <ImageWithScaleAnimation
          image={image.link}
          name={image.name}
          index={index}
          key={index}
        />
      ))}
      <div className="relative">
        <div className="absolute bg-black bottom-0 w-full">
          <svg
            className="w-full "
            viewBox="0 0 1420 185"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#e2e8f0"
              d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,85,576,106.7C672,128,768,139,864,133.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
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
