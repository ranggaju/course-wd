import Link from "next/link";

const links = [
  { name: "About me", href: "#aboutme" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto mt-4 flex justify-between items-center px-8 py-4 bg-white/30 rounded-2xl">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            rangga<span className="text-orange-500">.</span>
          </h1>
        </Link>
        <div className="flex gap-8 text-lg items-center-safe">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-orange-500 hover:border-orange-500 hover:border-b-2 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
