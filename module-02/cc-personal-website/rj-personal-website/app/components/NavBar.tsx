import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 mx-4 mt-2 bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <div>Left</div>
        <div>Mid</div>
        <div>Right</div>
      </div>
    </nav>
  );
};

export default NavBar;
