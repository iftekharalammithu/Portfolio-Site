import AOS from "aos";
import "./About.css";
import "aos/dist/aos.css";
import { skills } from "./Data";

// Initialize AOS (Animate On Scroll) library for smooth scrolling animations
AOS.init();

const About = () => {
  return (
    <div
      id="about"
      className=" 
      bg-slate-200 "
    >
      <div className="mx-20   flex items-center h-[90vh]">
        <div
          className="w-2/3 pr-20  items-center flex flex-col"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="70"
          data-aos-mirror="true"
        >
          <h1 className="text-5xl  relative tracking-tighter	 font-bold">
            <span>Hey Folks, I&apos;m </span>
            <div className=" inline-block animated-container relative min-w-[420px] ml-2  align-top">
              <span className="animated-item text-textcolor">
                Iftekhar Alam Mithu
              </span>{" "}
              <span className="animated-item text-textcolor">Full Stack</span>{" "}
              <span className="animated-item text-textcolor">Developer</span>
            </div>
          </h1>
          <div className="text-[20px] relative mt-3 ">
            <h1 className=" text-center capitalize">
              With over{" "}
              <span className="font-bold text-2xl text-textcolor">2 Years</span>{" "}
              of hand on experience as a{" "}
              <span className="font-bold text-2xl text-textcolor">
                Full Stack Developer
              </span>{" "}
              . I bring a distinctive combination of creativity and technical
              expertise to the table.
            </h1>
          </div>
          <div className="mt-20 text-[20px]  gap-9 flex ">
            <a
              href="Download Link"
              className="relative  inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#272624] transition-all duration-150 ease-in-out rounded-2xl  hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-textcolor group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Download Resume
              </span>
            </a>
            <a
              href="Download Link"
              className="relative  inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#272624] transition-all duration-150 ease-in-out rounded-2xl   bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-textcolor group-hover:h-full"></span>

              <span className="relative text-textcolor w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Let&apos;s Collaborate
              </span>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          data-aos-delay="70"
          data-aos-mirror="true"
          className=" w-1/3 "
        >
          <section className=" mx-auto px-4 py-16">
            <h2 className="text-6xl  font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
                  />
                </div>
              ))}
            </div>
          </section>{" "}
        </div>
      </div>
      <div className=" px-2 mt-0   mx-20 flex">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="70"
          data-aos-mirror="true"
          className="w-2/3 flex  capitalize flex-col gap-6 pr-8 "
        >
          <h2 className="text-5xl text-center font-bold mb-4">
            Offering Services
          </h2>
          <h1 className="text-3xl  font-semibold text-textcolor mb-4 tracking-wide">
            Are you in need of a professional and skilled Web Application
            Developer?
          </h1>
          <p className="mb-6 text-[20px]">
            Hey there! I&apos;m a dedicated full-stack web application developer
            with a strong background in building MERN Stack Applications. I
            specialize in using React js for the front end, and Node Js,
            Mongoose, and MongoDB for the back end. I have experience in
            aggregating data in MongoDB and writing aggregation pipelines.
            I&apos;m excited about the possibility of working together with you
            on some awesome projects!
          </p>
          <h3 className="text-3xl  font-semibold text-textcolor mb-1">
            Stacks I can be trusted with
          </h3>
          <p className="text-[20px] font-semibold">
            Javascript - React js - Tailwind CSS - Next js - React bootstrap -
            GraphQL - Node Js - Animation - Mongoose - MongoDB - Redux Toolkit -
            Express - Firebase - Bootstrap - Material UI - Framer Motion
            Animation - Cloudinary - Stripe - MySQL - Python ||
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="70"
          data-aos-mirror="true"
          className="w-1/3  justify-center  items-center flex flex-col gap-9 pl-8"
        >
          <h1 className="text-5xl  text-center font-bold mb-4 mt-0">
            Services
          </h1>
          <ul className="space-y-10  flex flex-col pb-2  text-textcolor font-semibold text-sm sm:text-base md:text-3xl">
            <li className="flex  items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-textcolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Frontend Development
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-textcolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
              Backend Development
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-textcolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              API Optimization
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-textcolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Performance Tuning
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-textcolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
              Database Modeling
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-textcolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              Debugging
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
