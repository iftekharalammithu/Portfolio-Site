import { Transition } from "./Components/Transition";
import About from "./Pages/About/About";
import Name_Animate from "./Components/Name_Animation/Name_Animate";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";
// import "./App.css"; // Tailwind should be imported in this file

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
