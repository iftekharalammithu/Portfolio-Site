import { Transition } from "./Components/Transition";
import About from "./Pages/About/About";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";
import Work from "./Pages/Work/Work";
import Footer from "./Pages/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Send page view event whenever route changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Transition>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
      </Transition>
      <Work></Work>
      <Footer></Footer>
    </>
  );
};

export default App;
