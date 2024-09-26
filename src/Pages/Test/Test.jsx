import { useEffect, useState } from "react";
import "../Footer/Footer.css";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const Test = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short",
      };
      setLocalTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div id="contact" className="bg-black text-white">
      <div className="mx-4 md:mx-20 flex flex-col md:flex-row justify-between">
        <div className="pt-10 md:pt-20 max-w-4xl flex flex-col gap-2">
          <img
            src="src/assets/eye-svgrepo-com.svg"
            className="w-16 h-16 md:w-24 md:h-24 mb-4"
            alt=""
          />

          <h1 className="text-2xl md:text-4xl mb-4 font-bold">
            Like what you see?
          </h1>
          <p className="text-[16px] md:text-[20px] capitalize text-pretty font-normal">
            If you&apos;ve made it down this far, why not send me an email?{" "}
            <br />
            Schedule a free consultation to learn more about my services and how
            I can help your business. With my expertise in Web Development, I
            can turn your ideas into functional, user-friendly applications.
            Let&apos;s connect to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-10 justify-left mt-6 md:mt-12 ">
            <button
              onClick={() =>
                window.open("https://wa.me/601860104523", "_blank")
              }
              className="button2 gap-4 justify-center"
            >
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.6em"
                height="1.2em"
                viewBox="0 0 256 193"
              >
                <path
                  fill="#4285f4"
                  d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
                ></path>
                <path
                  fill="#34a853"
                  d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
                ></path>
                <path
                  fill="#c5221f"
                  d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
                ></path>
              </svg>
            </button>

            <button
              onClick={() =>
                window.open("https://wa.me/+8801860104523", "_blank")
              }
              className="button2 justify-center"
            >
              WhatsApp
              <svg
                viewBox="0 0 48 48"
                y="0px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  fill="#fff"
                ></path>
                <path
                  d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                  fill="#fff"
                ></path>
                <path
                  d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                  fill="#cfd8dc"
                ></path>
                <path
                  d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                  fill="#40c351"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                  fillRule="evenodd"
                  fill="#fff"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* // ... existing code ... */}
        <div className="flex flex-col items-center  gap-4 p-6 md:p-10">
          <img
            src="src/assets/tilla-svgrepo-com.svg"
            className="w-16 h-16 md:w-24 md:h-24 mb-4"
            alt="Tilla SVG"
          />
          <div className="social-links grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="social-link"
              href="https://github.com/iftekharalammithu"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/iftekharalammithu"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              className="social-link"
              href="https://x.com/M1thuChowdhury"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/iftekharalammithu"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              className="social-link"
              href="https://www.pinterest.com/iftekharalammithu/"
              target="_blank"
              rel="noopener noreferrer"
              title="Pinterest"
            >
              <FaPinterest className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              className="social-link"
              href="https://discord.com/users/iftekharalammithu"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
            >
              <FaDiscord className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
        {/* // ... remaining code ... */}
      </div>
      <div className="mx-4 md:mx-20 border-t border-gray-700 my-4"></div>
      <div className="mx-4 md:mx-20 flex flex-col items-center text-sm md:text-xl font-semibold">
        <span>Local time:</span>
        {localTime}
      </div>
    </div>
  );
};

export default Test;
