import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;