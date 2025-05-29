import { getIcon } from "@/lib/getAsset";
import Image from "next/image";
import whyChooseUsData from "@/data/whyChooseUs.json";

const WhyChooseUs = () => {
  return (
    <section className="w-full pt-[0px] lg:pt-[0px] container-padding lg:mt-0">
      <div className="flex items-center justify-between">
        <h3 className="font-inter font-bold text-text-primary lg:hidden z-10">
          Why Choose Us?
        </h3>
        <h2 className="font-inter font-bold text-text-primary hidden lg:block">
          Why Choose Us?
        </h2>
        <Image
          src={getIcon("right-arrow.svg") || ""}
          alt="right"
          width={24}
          height={24}
          className="lg:hidden z-10"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-[40px] lg:grid-cols-4 lg:gap-0">
        {whyChooseUsData.features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center bg-background lg:bg-transparent rounded-md shadow-sm h-[80px] lg:shadow-none lg:rounded-none ${
              (index + 1) % 4 !== 0
                ? "lg:border-r-[0.2px] border-gray-5/60"
                : ""
            } ${
              index < 4 ? "lg:border-b-[0.2px] border-gray-5/60" : ""
            } lg:flex-row lg:items-center lg:justify-start lg:pl-[12px] xl:pl-[24px] lg:gap-[8px] xl:gap-[16px] `}
          >
            <Image
              src={getIcon(feature.icon) || ""}
              alt={feature.title}
              width={28}
              height={28}
              className="xl:h-[32px] xl:w-[32px]"
            />
            <h6 className="text-text-primary font-medium text-center mt-2 text-[14px] leading-[100%] lg:mt-0  xl:text-[18px]">
              {feature.title}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
