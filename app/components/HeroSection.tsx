import Link from "next/link";
import { RefObject } from "react";

export default function HeroSection({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) {
  const handleScrollToPackages = () => {
    reference?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="wrapper flex justify-center h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] pb-20! items-center flex-col">
      <div className="mb-4 md:mb-5 lg:mb-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-mono mb-2 md:mb-3">
          YouthLink Network
        </h2>
        <p className="text-center font-mono txt md:text-base! lg:text-[18px]!">
          Local ISP located at Konabari, Gazipur
        </p>
      </div>
      <div className="flex gap-3 sm:flex-row md:gap-6">
        <button
          className="button-primary txt h-12! w-36! md:h-14! md:w-42! lg:h-14! lg:w-46!"
          onClick={handleScrollToPackages}
        >
          View Packages
        </button>
        <Link href="about">
          <button className="button-secondary txt h-12! w-36! md:h-14! md:w-42! lg:h-14! lg:w-46!">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
}
