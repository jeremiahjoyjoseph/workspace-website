import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { getImage } from "@/lib/getAsset";

const AppDownload = () => {
  return (
    <section className="w-full mt-[50px] container-padding xl:mt-[80px] pb-[30px] xl:pb-[60px]">
      <SectionHeader title="Download Our App Now" />
      <div className="bg-background rounded-md mt-[20px] lg:hidden">
        <Image
          src={getImage("app-mockup-mobile.svg") || ""}
          alt="mockup"
          height={100}
          width={100}
          className="h-auto w-full"
        />
        <div className="flex gap-[20px] justify-between items-center p-[12px]">
          <Image
            src={getImage("google-play.svg") || ""}
            alt="app store"
            height={45}
            width={100}
            className="flex flex-1"
          />
          <Image
            src={getImage("app-store.svg") || ""}
            alt="app store"
            height={45}
            width={100}
            className="flex flex-1"
          />
        </div>
      </div>

      <div className="hidden lg:flex mt-[60px] relative h-[400px] items-end overflow-hidden">
        <Image
          src={getImage("app-mockup-desktop.svg") || ""}
          alt="mockup"
          height={100}
          width={100}
          className="h-auto w-[400px] absolute bottom-[-8%] left-0 z-10 transition-transform duration-300 hover:-translate-y-2"
        />
        <div className="bg-background rounded-md border-[0.5px] border-r-[1px] border-gray-5/60 w-full flex flex-col justify-center items-end p-[20px] relative h-[200px] pt-[40px]">
          <div className="flex flex-col items-baseline gap-[20px] max-w-[40%] xl:max-w-[50%]">
            <p className="text-text-primary font-semibold text-h6 xl:text-h4">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex gap-[20px] justify-start items-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src={getImage("google-play.svg") || ""}
                  alt="app store"
                  height={45}
                  width={146}
                />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src={getImage("app-store.svg") || ""}
                  alt="app store"
                  height={45}
                  width={132}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
