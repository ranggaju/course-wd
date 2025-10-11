import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex h-[100vh] justify-between items-center pt-24">
        <div>
          <span className="text-[20px] xl:text-[24px] leading-[1.1]">
            Web Developer
          </span>
          <h1 className="text-[48px] xl:text-[80px] leading-[1.1] my-8">
            Hello! I&apos;m <br />
            <span className="text-lime-500">Rangga Julio</span>
          </h1>
          <p className="text-[20px] xl:text-[24px] leading-[1.1] max-w-[500px]">
            Frontend developer focused on creating fast, elegant, and
            user-friendly web applications with React, Next.js, and Tailwind
            CSS.
          </p>
        </div>
        <div>
          <Image src="/hero.webp" alt="" width={480} height={480} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
