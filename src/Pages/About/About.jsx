import AOS from "aos";
import "./About.css";
import "aos/dist/aos.css";
import { Download } from "lucide-react";

AOS.init();

const About = () => {
  return (
    <div
      id="about"
      className=" h-screen 
      bg-slate-200 "
    >
      <div className="mx-32 flex items-center h-screen">
        <div
          className="w-2/3 pr-20 bdr items-center flex flex-col"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="70"
          data-aos-mirror="true"
        >
          <h1 className="text-5xl  relative tracking-tighter	 font-bold">
            <span>Hey Folks, I'm </span>
            <div className=" inline-block relative min-w-[420px] ml-2  align-top">
              <span className="animated-item">Iftekhar Alam Mithu</span>{" "}
              <span className="animated-item">Full Stack</span>{" "}
              <span className="animated-item">Developer</span>
            </div>
          </h1>
          <div className="text-[20px] relative mt-3 ">
            <h1 className="">
              With over{" "}
              <span className="font-bold text-2xl text-[#ffc200]">2 Years</span>{" "}
              of hand on experience as a{" "}
              <span className="font-bold text-2xl text-[#ffc200]">
                Full Stack Developer
              </span>{" "}
              . I bring a distinctive combination of creativity and technical
              expertise to the table.
            </h1>
          </div>
          <div className="mt-20 gap-5 ">
            <button className="download_button flex gap-2  p-2 bdr rounded-lg">
              {" "}
              <Download /> Download
            </button>
          </div>
        </div>
        <div className="w-1/3 bdr">
          This element will fade up when it comes into view2
        </div>
      </div>
    </div>
  );
};

export default About;
