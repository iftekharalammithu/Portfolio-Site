import { Transition } from "./Components/Transition";
import About from "./Pages/About/About";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";

const App = () => {
  return (
    <>
      <Transition>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
      </Transition>
    </>
  );
};

export default App;
