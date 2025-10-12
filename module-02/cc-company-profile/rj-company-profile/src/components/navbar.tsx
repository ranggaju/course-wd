"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full mt-2 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-2xl">
        <div className="text-2xl font-bold items-center">
          <span className="text-lime-600">[</span>rj
          <span className="text-lime-600">]</span>
          <span className="text-lime-600">corp.</span>
        </div>
        <ul className="flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-lime-600 transition ${
                  pathname === link.href
                    ? "text-lime-600 font-semibold"
                    : "text-lime-800"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
