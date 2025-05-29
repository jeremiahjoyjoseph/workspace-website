import { getImage } from "@/lib/getAsset";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section>
      <section className="w-full md:hidden relative">
        <Image
          src={getImage("hero-bg-mobile.svg") || ""}
          alt="Hero"
          width={100}
          height={100}
          className="w-full h-auto"
        />
        <div className="relative h-[120px]">
          <Image
            src={getImage("hero-bg-mobile-bottom.svg") || ""}
            alt="Hero"
            width={100}
            height={100}
            className="w-full h-auto absolute top-[-20px]"
          />

          <h4 className="text-text-primary font-bold z-99 container-padding  pt-[20px] text-center absolute top-0">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-primary">₹199/-!</span>
          </h4>
        </div>
      </section>
      <section className="w-full hidden md:flex relative md:h-[400px] lg:h-[500px] xl:h-[580px]">
        <h1 className="text-text-primary leading-[100%] tracking-[-1px] font-bold z-99 container-padding max-w-[70%] pt-[100px] hidden xl:block">
          <AnimatedText>
            Host your meeting with world-class amenities.
          </AnimatedText>
          <AnimatedText>
            Starting at <span className="text-primary">₹199/-!</span>
          </AnimatedText>
        </h1>
        <p className="text-text-primary leading-[100%] tracking-[-1px] font-bold z-99 container-padding max-w-[70%] pt-[100px] hidden md:block xl:hidden text-[44px]">
          <AnimatedText>
            Host your meeting with world-class amenities.
          </AnimatedText>
          <AnimatedText>
            Starting at <span className="text-primary">₹199/-!</span>
          </AnimatedText>
        </p>
        <Image
          src={getImage("hero-bg-left.svg") || ""}
          alt="Hero"
          width={929}
          height={754}
          className="h-[100%] w-[65%] absolute left-0 top-[-80px]"
        />
        <Image
          src={getImage("hero-bg-right.svg") || ""}
          alt="Hero"
          width={692}
          height={743}
          className="h-[100%] w-[35%] absolute right-0 top-0 z-9"
        />
      </section>
    </section>
  );
};

export default Hero;
