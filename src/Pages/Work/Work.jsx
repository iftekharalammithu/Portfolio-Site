import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const imageLinks = [
  {
    name: "Image1",
    projectLink:
      "https://github.com/iftekharalammithu/food-delivery-app-fontend.git",
    link: "https://res.cloudinary.com/dzq7wlebm/image/upload/v1727362844/homepage_snmex8.png",
  },
  {
    name: "Image 2",
    projectLink: "https://github.com/iftekharalammithu/Chat-App-Mern-Stack.git",
    link: "https://res.cloudinary.com/dzq7wlebm/image/upload/v1727363090/image_en3cga.png",
  },
  {
    name: "Image 3",
    projectLink:
      "https://github.com/iftekharalammithu/Hospital-Management-System.git",
    link: "https://res.cloudinary.com/dzq7wlebm/image/upload/v1727363354/image_1_hu8pbz.png",
  },
  {
    name: "Image 4",
    projectLink: "https://github.com/iftekharalammithu/job-portal-fontend.git",
    link: "https://res.cloudinary.com/dzq7wlebm/image/upload/v1727365263/image_pmmpha.png",
  },
  {
    name: "Image 5",
    projectLink:
      "https://github.com/iftekharalammithu/E-Commerce-Project-FontEND.git",
    link: "https://res.cloudinary.com/dzq7wlebm/image/upload/v1727366081/Screenshot_182_wq8iog.png",
  },
  {
    name: "Image 6",
    projectLink: "https://github.com/iftekharalammithu/airbnb_clone",
    link: "https://res.cloudinary.com/dzq7wlebm/image/upload/v1745001805/airbnbhome_iuyebh.png",
  },
];

const Work = () => {
  return (
    <div id="work" className="pt-20  justify-center bg-slate-200 items-center">
      <h1
        className=" text-4xl sm:text-5xl text-center font-bold
"
      >
        Projects
      </h1>
      {imageLinks.map((image, index) => (
        <ImageWithScaleAnimation
          image={image.link}
          name={image.name}
          projectLink={image.projectLink}
          index={index}
          key={index}
        />
      ))}
      <div className="relative">
        <div className="absolute bg-black bottom-0 w-full">
          <svg
            className="w-full"
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

const ImageWithScaleAnimation = ({ image, index, name, projectLink }) => {
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
      className="sticky  top-0 h-[600px] md:h-[700px] lg:h-[800px] flex justify-center items-center overflow-hidden"
    >
      <motion.img
        onClick={() => {
          window.open(projectLink, "_blank");
        }}
        src={image}
        alt={name}
        className="absolute w-[300px] rounded-2xl h-[200px] sm:w-[400px] sm:h-[266px] md:w-[500px] md:h-[333px] lg:w-[900px] lg:h-[600px]"
        // className="absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[900px]"
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
