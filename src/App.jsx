import { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <main className="max-w-9xl mx-auto">
      <Navbar/>
      <Hero/>
    </main>
  );
}

export default App;
