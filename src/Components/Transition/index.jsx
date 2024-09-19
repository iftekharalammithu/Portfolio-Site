import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLenis, useTimeOut } from "../Hook";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "./Preloader/Preloader";

export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  useLenis();
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 2000,
    deps: [], // Dependency array
  });
  useEffect(() => {
    setLoading(true); // Set loading state on route change
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="overflow-hidden ">
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
