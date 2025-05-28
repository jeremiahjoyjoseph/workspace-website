import { getImage } from "@/lib/getAsset";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="w-full md:hidden">
        <Image
          src={getImage("hero-bg-mobile.svg") || ""}
          alt="Hero"
          width={100}
          height={100}
          className="w-full h-auto"
        />
        <h4 className="text-text-primary font-bold z-99 container-padding  pt-[20px] text-center">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="text-primary">₹199/-!</span>
        </h4>
      </section>
      <section className="w-full hidden md:flex">
        <h1 className="text-text-primary text-4xl font-bold z-99 container-padding max-w-[650px] pt-[100px]">
          Host your meeting with world-class amenities.
          <br /> Starting at <span className="text-primary">₹199/-!</span>
        </h1>
        <Image
          src={getImage("hero-bg-left.svg") || ""}
          alt="Hero"
          width={929}
          height={754}
          className="h-[520px] w-auto absolute left-0 top-0 "
        />
        <Image
          src={getImage("hero-bg-right.svg") || ""}
          alt="Hero"
          width={692}
          height={743}
          className="h-[420px] w-auto absolute right-0 top-0 z-9"
        />
      </section>
    </>
  );
};

export default Hero;
