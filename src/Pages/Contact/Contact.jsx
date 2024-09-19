import React, { useEffect, useState } from "react";
import About from "./Pages/About/About";
// import "./App.css"; // Tailwind should be imported in this file

const App = () => {
  const [scrollDirection, setScrollDirection] = useState("right-to-left");

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scroll down
        setScrollDirection("right-to-left");
      } else {
        // Scroll up
        setScrollDirection("left-to-right");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-full  relative  bg-[#999D9E]  items-center justify-center overflow-hidden bdr">
        <div
          className={`bdr flex list  text-9xl font-bold text-white ${
            scrollDirection === "right-to-left"
              ? "animate-right-to-left"
              : "animate-left-to-right"
          }`}
        >
          <div>
            <h1>~IFTEKHAR ALAM MITHU</h1>
          </div>
          <div>
            <h1>~IFTEKHAR ALAM MITHU</h1>
          </div>
        </div>
      </div>
      <About></About>
    </>
  );
};

export default App;
