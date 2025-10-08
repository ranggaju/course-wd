import Link from "next/link";
import LoginButton from "@/components/navbar/LoginButton";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-4">
      <div className="flex font-bold text-2xl">
        <span className="text-orange-500">My</span>Blog
      </div>
      <div className="flex gap-6 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/articles"}>Articles</Link>
        <LoginButton />
      </div>
    </div>
  );
};

export default NavBar;
