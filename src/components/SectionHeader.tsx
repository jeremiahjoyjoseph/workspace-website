import Image from "next/image";
import { getIcon } from "@/lib/getAsset";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div className="flex items-center justify-between">
    <h3 className="font-inter font-bold text-text-primary lg:hidden z-10">
      {title}
    </h3>
    <h2 className="font-inter font-bold text-text-primary hidden lg:block">
      {title}
    </h2>
    <Image
      src={getIcon("right-arrow.svg") || ""}
      alt="right"
      width={24}
      height={24}
      className="lg:hidden z-10"
    />
  </div>
);

export default SectionHeader;
