import { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className="max-w-9xl mx-auto">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  );
}

export default App;
