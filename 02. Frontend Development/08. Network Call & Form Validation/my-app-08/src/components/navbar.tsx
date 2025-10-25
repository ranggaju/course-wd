import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex absolute top-0 justify-between h-[50px] w-full p-5">
      <Link href={"/"} className="text-4xl">
        LOGO
      </Link>
      <div className="flex gap-2">
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </div>
    </div>
  );
}
