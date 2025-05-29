"use client";
import { getSpaces } from "@/lib/getSpaces";
import { Space } from "@/types/Space";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { getIcon } from "@/lib/getAsset";

const SpacesOverview = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);

  useEffect(() => {
    getSpaces().then(setSpaces);
  }, []);

  return (
    <section className="w-full mt-[50px] container-padding xl:mt-[120px]">
      <SectionHeader title="Our Spaces" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px] md:gap-[40px] mt-[30px]">
        {spaces.map((space) => (
          <div
            key={space.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col h-full border-[0.5px] border-r-[1px] border-gray-5/60"
          >
            <div className="flex items-center justify-between">
              <h5 className="font-semibold max-w-[70%]">{space.name}</h5>
              <a
                className="bg-background-secondary rounded-md flex items-center justify-center w-[44px] h-[44px] hover:bg-primary hover:text-white transition-all duration-300"
                href={space.google_maps_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={getIcon("assistant_direction.svg") || ""}
                  alt="right"
                  width={18}
                  height={18}
                />
              </a>
            </div>
            <div className="relative w-full h-[175px] rounded-md overflow-hidden mt-[16px]">
              <Image
                src={space.images[0] || "/placeholder.jpg"}
                alt={space.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            <div className="flex gap-[12px] mt-[21px]">
              <div className=" group flex flex-1 bg-background-secondary rounded-md p-[8px] border-[#E5DDDD] border-[0.5px] align-middle justify-between">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[12px] text-text-secondary mt-1">
                    Day Pass
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-base font-semibold text-text-primary">
                      ₹{space.day_pass_price}
                    </span>
                    <span className="text-[12px] text-text-secondary mt-1">
                      /Day
                    </span>
                  </div>
                </div>
                <Image
                  src={getIcon("right-arrow-2.svg") || ""}
                  alt="day pass"
                  width={18}
                  height={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
              <div className="group flex flex-1 bg-btn-primary rounded-md p-[8px] border-[#FFC422] border-[0.5px] items-center justify-between relative">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[12px] text-text-secondary mt-1">
                    Day Pass
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-base font-semibold text-text-tertiary">
                      ₹{space.day_pass_price}
                    </span>
                    <span className="text-[12px] text-text-tertiary mt-1">
                      /10 Days
                    </span>
                  </div>
                </div>
                <Image
                  src={getIcon("right-arrow-2.svg") || ""}
                  alt="day pass"
                  width={18}
                  height={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
                <div className="flex items-center justify-center bg-text-primary rounded-md absolute top-[-5px] left-[calc(50%-32px)] h-[16px] w-[64px] z-10">
                  <p className="font-medium text-[8px] text-[#FFFDF7]">
                    20% Discount
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpacesOverview;
