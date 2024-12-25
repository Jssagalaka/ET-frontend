import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Skill from "./pages/Skill";

function App() {
  return (
    <>
      <Navbar />;
      <Home />
      <Services />
      <About />
      <Footer />
    </>
  );
}

export default App;
