import React, { useState } from "react";
import NavItems from "../componets/NavItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 px-8 bg-black/90 text-neutral-400 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 c-space">
          <span className="text-lg hover:text-white font-bold">Jayant</span>
          <button
            className="sm:hidden flex hover:text-white focus:outline-none"
            onClick={() => toggleMenu()}
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-6">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
