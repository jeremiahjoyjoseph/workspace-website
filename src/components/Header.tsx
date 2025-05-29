import Link from "next/link";
import { getImage, getIcon } from "@/lib/getAsset";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-background shadow-sm container-padding sticky top-0 z-99999">
      <div className="">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={getImage("logo.svg") || ""}
                alt="BHive Logo"
                width={100}
                height={32}
                className="mr-2"
              />
            </Link>
          </div>

          <nav className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="shadow-[4px_4px_14px_rgba(0,0,0,0.06)] rounded-[4px] h-9 w-9 flex items-center justify-center border border-primary transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1"
            >
              <Image
                src={getIcon("call.svg") || ""}
                alt="Call"
                width={24}
                height={24}
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
