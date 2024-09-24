import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col bdr bg-slate-200  items-center  h-screen relative ">
      <div className=" bdr">
        {/* The Image Div */}
        <div className="w-96 h-96 mt-20 overflow-hidden">
          <img
            src="https://images.prismic.io/ashfall-studio/Zg_3TBrFxhpPBVVJ_Service1_Strategy.jpg"
            alt="work"
            className="w-96 h-96 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110 hover:rotate-1  bdr overflow-hidden"
          />
        </div>
        <h1 className="text-4xl font-bold bdr text-black ">Work</h1>
        <h1 className="text-4xl font-bold text-black ">Work</h1>
      </div>

      {/* The Wave  */}
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
  );
};

export default Work;
