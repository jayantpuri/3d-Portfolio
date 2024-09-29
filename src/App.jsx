import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="max-w-9xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}

export default App;
