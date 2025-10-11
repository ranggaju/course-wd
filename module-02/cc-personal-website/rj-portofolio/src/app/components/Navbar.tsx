import Link from "next/link";

const links = [
  { name: "About", href: "#About" },
  { name: "Portofolio", href: "#Portofolio" },
  { name: "Contact", href: "#Contact" },
];

const Navbar = () => {
  return (
    <nav className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            rangga<span className="text-orange-500">.</span>
          </h1>
        </Link>
        <div className="flex gap-8 text-lg">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
