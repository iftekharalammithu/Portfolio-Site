import { Transition } from "./Components/Transition";
import About from "./Pages/About/About";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";
import Work from "./Pages/Work/Work";
import Footer from "./Pages/Footer/Footer";
import Test from "./Pages/Test/Test";
const App = () => {
  return (
    <>
      <Transition>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
      </Transition>
      <Work></Work>
      <Footer></Footer>
      {/* <Test></Test> */}
    </>
  );
};

export default App;
