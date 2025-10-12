const Footer = () => {
  return (
    <footer className="py-4 text-center mt-20">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">
            <span className="text-lime-600">[</span>rj
            <span className="text-lime-600">]</span>
            <span className="text-lime-600">corp.</span>
          </span>{" "}
          All rights reserved
        </p>
        <p className="text-xs text-gray-500">
          Designed using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
