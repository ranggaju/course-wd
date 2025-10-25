"use client";

import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <button
      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer"
      onClick={handleLoginClick}
    >
      Login
    </button>
  );
};

export default LoginButton;
