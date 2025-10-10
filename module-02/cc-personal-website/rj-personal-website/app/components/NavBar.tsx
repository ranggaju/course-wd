import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 mx-4 mt-2 p-6">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          [<span className="text-orange-500">rj.</span>]
        </div>
        <div className="flex gap-6">
          <Link href={"#about"}>About</Link>
          <Link href={"#portofolio"}>Portofolio</Link>
          <Link href={"#contact"}>Contact</Link>
        </div>
        <div>
          <h1>
            <span className="text-orange-500">Rangga</span> Julio Putra
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
