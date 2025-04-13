import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-8  min-h-screen md:justify-center lg:max-w-7xl mx-auto lg:items-center">
      {/* Left Section: Text */}
      <div className="max-w-xl text-center md:text-left uppercase lg:ml-0 lg:mr-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Best <span className="text-yellow-500">Product</span> Started
        </h1>
        <p className="text-md md:text-lg font-medium mb-4">
          50% SALES FOR THIS WEEKEND
        </p>
        <Button className="px-6 py-3 text-md md:text-lg">Search</Button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-2/3 max-h-[600px] flex justify-center">
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={700}
          height={700}
          className="rounded-lg shadow-xl object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
